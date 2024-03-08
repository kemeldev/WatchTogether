import Footer from '../home/footer/footer'
import SearchNavbar from './SearchNavbar/SearchNavbar'
import SearchParameters from './SearchParameters.jsx/SearchParameters'
import './search.css'
import ShowingList from './showingList/ShowingList'
import { urls } from '../../constants'
import { useEffect, useState } from 'react'
import { useInfinityFetched } from '../../hooks/useFetch'

function Search() {
  const [searchUrl, setSearchUrl] = useState(urls.popularMovies)

  const queryKey = ['search']
  const { fetchNextPage, isError, isLoading, data, hasNextPage, isFetchingNextPage, refetch } = useInfinityFetched(searchUrl, queryKey)

  useEffect(() => {
    refetch()
  }, [searchUrl, refetch])


  return (
    <>
      <section>
        <SearchNavbar />
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