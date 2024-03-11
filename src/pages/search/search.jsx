import Footer from '../home/footer/footer'
import SearchNavbar from './SearchNavbar/SearchNavbar'
import SearchParameters from './SearchParameters.jsx/SearchParameters'
import './search.css'
import ShowingList from './showingList/ShowingList'
import { urls } from '../../constants'
import { useEffect, useMemo, useState } from 'react'
import { useInfinityFetched } from '../../hooks/useFetch'
import { useLocation } from 'react-router-dom'

function Search() {
  const { state } = useLocation()
  const [searching, setSearching] = useState(state)
  const [nowShowing, setNowShowing] = useState("")
  const [searchUrl, setSearchUrl] = useState(urls.popularMovies)
  const [searchMulti] = useState(urls.multiSearch)
  const [searchFormError, setSearchFormError] = useState('')
  const [sortedData, setSortedData] = useState([])


  useEffect(() => {
    // Scroll to the top of the page when the component is rendered
    window.scrollTo(0, 0)
  }, [])
  
  //multiSearch function
  const handleSearchSubmit = async (e) => {
    e.preventDefault()
    
    // const dataUsingRef = textInputRef.current.value
    const SearchWord = new FormData(e.target)
    const dataToSearch = SearchWord.get('specificSearch')
    

    if (dataToSearch === '') {
      const newError = 'Cannot search with just a blank space'
      setSearchFormError(newError)
      return
    }
    else if (dataToSearch.match(/\d+/)) {
      const newError = 'Cannot search by only numbers'
      setSearchFormError(newError)
      return
    }
    else if (dataToSearch.length < 3) {
      const newError = 'Search must contain at least 3 characters'
      setSearchFormError(newError)
    } else {
      setSearchFormError(null)
      setNowShowing(dataToSearch)
      setSearchUrl(searchMulti+dataToSearch+"&include_adult=false&language=en-US")
    }
  }

  // function to change the searching state when click on the navbar, and therefore trigger the refetch
  const handleSearchingChange = (tab) => {
    setSearching(tab);
    if (tab === 'popularMovies') {
      setSearchUrl(urls.popularMovies);
      setNowShowing("Popular Movies")
    } else if (tab === 'popularSeries') {
      setSearchUrl(urls.popularSeries);
      setNowShowing("Popular Series")
    } else if (tab === 'trendingAll') {
      setSearchUrl(urls.trendingAll);
      setNowShowing("Movies and Series")
    }
  };

  // effec to triger the refect when state changes
  useEffect(() => {
     setSearching(state) 
      if(state === "popularMovies") {
        setSearchUrl(urls.popularMovies) 
        setNowShowing("Popular Movies") }
      if(state === "popularSeries") {
        setSearchUrl(urls.popularSeries) 
        setNowShowing("Popular Series") }
      if(state === "trendingSeries") {
        setSearchUrl(urls.trendingSeries) 
        setNowShowing("Trending Series") }
      if(state === "trendingMovies") {
        setSearchUrl(urls.trendingMovies) 
        setNowShowing("Trending Movies") }
      if(state === "trendingAll") {
        setSearchUrl(urls.trendingMovies) 
        setNowShowing("Movies and Series") }
      
  }, [state])


  // Fetch hook implemented
  const queryKeySearch = ['search']
  const { fetchNextPage, isError, isLoading, data, hasNextPage, isFetchingNextPage, refetch} = useInfinityFetched(searchUrl, queryKeySearch)

  // Apply the filter directly to data when it's fetched
  const filteredData = useMemo(() => {
    if (!data) return [];
    return data.filter(item => item.poster_path != null);
  }, [data]);

  //sortBy funtion
  function handleSortChange() {
    const newArray = filteredData.sort((a, b) => {
        const nameA = a.name || a.title;
        const nameB = b.name || b.title;
        return nameA.localeCompare(nameB);
    });
    setSortedData(newArray);
  }

  const sortedDatatoNull = () => {
    setSortedData([]);
  }

  const sortByRank= () => {
    return setSortedData(filteredData?.sort((a, b) =>  b.vote_average - a.vote_average))
  };

  const sortByReleasedYear = () => {
    const sortedDataCopy = [...filteredData];
    sortedDataCopy.sort((a, b) => {
        const yearA = 'release_date' in a ? parseInt(a.release_date.substring(0, 4)) : parseInt(a.first_air_date.substring(0, 4));
        const yearB = 'release_date' in b ? parseInt(b.release_date.substring(0, 4)) : parseInt(b.first_air_date.substring(0, 4));
        
        return yearB - yearA;
    });

    setSortedData(sortedDataCopy);
  };
  

  useEffect(() => {
    refetch()
  }, [searchUrl, refetch])

  


  return (
    <>
      <section>
        <SearchNavbar
          handleSearchingChange={handleSearchingChange}
          sortedDatatoNull={sortedDatatoNull}
        />
      </section>

      <section className='search_paramsAndList'>
        <SearchParameters
            handleSearchSubmit={handleSearchSubmit}
            searchFormError={searchFormError}
            handleSortChange={handleSortChange}
            sortByRank={sortByRank}
            sortByReleasedYear={sortByReleasedYear}
            sortedDatatoNull={sortedDatatoNull}
            setNowShowing={setNowShowing}

        />
        <ShowingList
          nowShowing={nowShowing}
          isLoading={isLoading}
          isError={isError}
          dataToRender={filteredData}
          sortedData={sortedData}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isisFetchingNextPage={isFetchingNextPage}
        />
      </section>

      <section>
        <Footer />
      </section>
    </>
  )
}

export default Search