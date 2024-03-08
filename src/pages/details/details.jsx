import './details.css'
import { useLocation, useParams } from 'react-router-dom'
import Footer from '../home/footer/footer'
import Overview from './overview/overview'
import Recommendations from './recommendations/recommendations'
import { useEffect, useState } from 'react'
import { urls } from '../../constants'
import { useFetch } from '../../hooks/useFetch'


function Details() {
  const { state } = useLocation()
  const [newState] = useState(state)
  const [recommendationsUrl, setRecommenUrl] = useState(urls.movieRecommendations)
  const [videoUrl, setVideoUrl] = useState(urls.movieVideo)
  const { id } = useParams()
  const numericId = parseInt(id)
  
  useEffect(() => {
    if (newState.movieOrTV === "movies") {
      setRecommenUrl(urls.baseURL + `movie/${id}/recommendations?language=en-US`);
      setVideoUrl(urls.baseURL + `movie/${id}/videos?language=en-US`);
    } else {
      setRecommenUrl(urls.baseURL + `tv/${id}/recommendations?language=en-US&page=1`);
      setVideoUrl(urls.baseURL + `tv/${id}/videos?language=en-US`);
    }
  }, [newState, numericId, id]);

  const queryKeyRecomm = ['newRecomm']
  const { data: recommData, refetch: recommRefetch } = useFetch(recommendationsUrl, queryKeyRecomm)

  const queryKeyVideo = ['newVideo']
  const { data: videoData, refetch: videoRefetch } = useFetch(videoUrl, queryKeyVideo)

  const videosArray = videoData.results ?? [];
  const filterArray = videosArray.find(item => item.type == "Trailer")
  
  useEffect(() => {
    if (state) {
      recommRefetch()
      videoRefetch()
    }
  }, [newState, recommendationsUrl, videoUrl, recommRefetch,videoRefetch])


  return (
    <>
      <section>
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
        <Recommendations
          recommendations={recommData.results}

        />
      </section>

      <section>
        <Footer />
      </section>


    </>
  )
}

export default Details