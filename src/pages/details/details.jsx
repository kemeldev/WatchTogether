import { useLocation, useParams } from 'react-router-dom'
import Footer from '../home/footer/footer'
import './details.css'
import Overview from './overview/overview'
import Recommendations from './recommendations/recommendations'
import { useEffect, useState } from 'react'
import { urls } from '../../constants'
import { useFetch } from '../../hooks/useFetch'


function Details() {
  const [url, setUrl] = useState("https://api.themoviedb.org/3/movie/30500?language=en-US")
  const { id } = useParams()
  const numericId = parseInt(id)
  const { state } = useLocation()
  // const { dataToRender } = state || {}

  useEffect(() => {
    if (state === 'movies') {
      setUrl(urls.baseURL + `movie/${numericId}?language=en-US`);
    } else if (state === 'series') {
      setUrl(urls.baseURL + `tv/${numericId}?language=en-US`);
    }
  }, [state, numericId]);

  //TODO: even thought it works, i have to fix the error that fetching is giving me due to race condition

  const queryKey = ['Newdetails']
  const { isError, isLoading, data, refetch } = useFetch(url, queryKey)

  
  useEffect(() => {
    if (url) {
      refetch()
    }
  }, [url, refetch])
  
  return (
    <>
      <section>
      {isLoading && <strong>Loading data</strong>}
      {isError && <strong>Error fetching data</strong>}
      {data.results ? (
              
          <Overview
          title={data.results.title}
          name={data.results.name}
          backImg={data.results.backdrop_path}
          overview={data.results.overview}
          score={data.results.vote_average}
        /> 
        ) : (
          <h1>No ha fetcheado</h1>
        )}

      </section>

      <section>
        <Recommendations />
      </section>

      <section>
        <Footer />
      </section>


    </>
  )
}

export default Details