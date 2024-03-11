import './details.css'
import { useLocation, useParams } from 'react-router-dom'
import Footer from '../home/footer/footer'
import Overview from './overview/overview'
import Recommendations from './recommendations/recommendations'
import { useEffect, useMemo, useState } from 'react'
import { urls } from '../../constants'
import { useFetch } from '../../hooks/useFetch'
import Navbar from '../home/navbar/navbar'


function Details() {
  const { state } = useLocation()
  const [newState, setNewState] = useState(state.movieOrTV)
  const { id } = useParams()
  const numericId = parseInt(id)
  const [videoUrl, setVideoUrl] = useState(urls.movieVideo)
  const [recommendationsUrl, setRecommenUrl] = useState(urls.movieRecommendations)


  const defineMovieTV = () => {
    if (state.item.name) {
      setNewState("series");
    } 
    if (state.item.title) {
      setNewState("movies");
    }
    }


  // use effect to determine if the data that comes is a movie of a tv serie
  useEffect(() => {
    if (newState=== "movies") {
      setRecommenUrl(urls.baseURL + `movie/${id}/recommendations?language=en-US`);
      setVideoUrl(urls.baseURL + `movie/${id}/videos?language=en-US`);
    } else if (newState === "series") {
      setRecommenUrl(urls.baseURL + `tv/${id}/recommendations?language=en-US&page=1`);
      setVideoUrl(urls.baseURL + `tv/${id}/videos?language=en-US`);
    }
  }, [newState]);


  const queryKeyRecomm = ['newRecomm']
  const { data: recommData, refetch: recommRefetch } = useFetch(recommendationsUrl, queryKeyRecomm)

  const queryKeyVideo = ['newVideo']
  const { data: videoData, refetch: videoRefetch } = useFetch(videoUrl, queryKeyVideo)

  const videosArray = videoData.results ?? [];
  const filterArray = videosArray.find(item => item.type === "Trailer")

  useEffect(() => {
    if (state) {
      videoRefetch()
      recommRefetch()
      defineMovieTV()
    }
  }, [state, recommendationsUrl,setRecommenUrl, recommRefetch])
  

  // Scroll to the top of the page when the component is rendered
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [state])

  // Apply the filter directly to dataRecommendation when it's fetched
  const filterData = useMemo(() => {
    if (!recommData.results) return [];
    return recommData?.results.filter(item => item.backdrop_path !== null);
  }, [recommData]);


  return (
    <>
      <section>
      <Navbar />
      {state ? (
              
          <Overview
            title={state.item?.title}
            name={state.item?.name}
            backImg={state.item?.backdrop_path}
            overview={state.item?.overview}
            score={state.item?.vote_average}
            videosArray={filterArray}
        /> 
        ) : (
          null
        )}

      </section>

      <section>
        {filterData.length > 0 && (
          <Recommendations
            recommendations={filterData}
          />
        )}
      </section>

      <section>
        <Footer />
      </section>


    </>
  )
}

export default Details