import Footer from '../home/footer/footer'
import SearchNavbar from './SearchNavbar/SearchNavbar'
import SearchParameters from './SearchParameters.jsx/SearchParameters'
import './search.css'
import ShowingList from './showingList/ShowingList'
import { urls } from '../../constants'
import { useEffect, useState } from 'react'
import { useInfinityFetched } from '../../hooks/useFetch'

function Search() {
  const [searchMovieUrl] = useState(urls.popularMovies)

  const queryKeyMovies = ['searchMovies']
  const { fetchNextPage: fetchNextPageMovie, isError: isErrorMovies, isLoading: isLoadingMovies, data : dataMovies, hasNextPage : hasNextPageMovies, isFetchingNextPage : isFetchingNextMovies, refetch : refetchMovies } = useInfinityFetched(searchMovieUrl, queryKeyMovies)
  

  useEffect(() => {
    refetchMovies()
  }, [searchMovieUrl, refetchMovies])


  return (
    <>
      <section>
        <SearchNavbar />
      </section>

      <section className='search_paramsAndList'>
        <SearchParameters />
        <ShowingList 
          isLoading={isLoadingMovies}
          isError={isErrorMovies}
          dataToRender={dataMovies}
          fetchNextPage={fetchNextPageMovie}
          hasNextPage={hasNextPageMovies}
          isisFetchingNextPage={isFetchingNextMovies}
        />
      </section>

      <section>
        <Footer />
      </section>
    </>
  )
}

export default Search