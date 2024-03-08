import Footer from '../home/footer/footer'
import SearchNavbar from './SearchNavbar/SearchNavbar'
import SearchParameters from './SearchParameters.jsx/SearchParameters'
import './search.css'
import ShowingList from './showingList/ShowingList'
import { urls } from '../../constants'
import { useEffect, useState } from 'react'
import { useInfinityFetched } from '../../hooks/useFetch'
import { useLocation } from 'react-router-dom'

function Search() {
  const { state } = useLocation()
  const [searching, setSearching] = useState(state)
  const [searchUrl, setSearchUrl] = useState(urls.popularMovies)

  useEffect(() => {
    // Scroll to the top of the page when the component is rendered
    window.scrollTo(0, 0)
  }, [])


  const handleSearchingChange = (tab) => {
    setSearching(tab);
    if (tab === 'popularMovies') {
      setSearchUrl(urls.popularMovies);
    } else if (tab === 'popularSeries') {
      setSearchUrl(urls.popularSeries);
    } else if (tab === 'trendingAll') {
      setSearchUrl(urls.trendingAll);
    }
  };

  useEffect(() => {
     setSearching(state) 
      if(state === "popularMovies") setSearchUrl(urls.popularMovies)
      if(state === "popularSeries") setSearchUrl(urls.popularSeries)
      if(state === "trendingSeries") setSearchUrl(urls.trendingSeries)
      if(state === "trendingSeries") setSearchUrl(urls.trendingMovies)
      if(state === "trendingAll") setSearchUrl(urls.trendingMovies)
  }, [state])

  const queryKeySearch = ['search']
  const { fetchNextPage, isError, isLoading, data, hasNextPage, isFetchingNextPage, refetch} = useInfinityFetched(searchUrl, queryKeySearch)
  

  useEffect(() => {
    refetch()
  }, [searchUrl, refetch])


  return (
    <>
      <section>
        <SearchNavbar
          handleSearchingChange={handleSearchingChange}
        />
      </section>

      <section className='search_paramsAndList'>
        <SearchParameters />
        <ShowingList 
          isLoading={isLoading}
          isError={isError}
          dataToRender={data}
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