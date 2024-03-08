import './details.css'
import { useLocation, useParams } from 'react-router-dom'
import Footer from '../home/footer/footer'
import Overview from './overview/overview'
import Recommendations from './recommendations/recommendations'
import { useEffect, useState } from 'react'
import { urls } from '../../constants'
import { useFetch } from '../../hooks/useFetch'


function Details() {
  const [detailsUrl, setDetailsUrl] = useState(urls.movieDetails)
  const [recommendationsUrl, setRecommenUrl] = useState(urls.movieRecommendations)
  const [videoUrl, setVideoUrl] = useState(urls.videoUrl)
  const { id } = useParams()
  const numericId = parseInt(id)
  const { state } = useLocation()
  
  useEffect(() => {
    if (state === 'movies') {
      setDetailsUrl(urls.baseURL + `movie/${numericId}?language=en-US`);
      setRecommenUrl(urls.baseURL + `movie/${numericId}/recommendations?language=en-US&page=1`);
      setVideoUrl(urls.baseURL + `movie/${numericId}/videos?language=en-US`);
    } else if (state === 'series') {
      setDetailsUrl(urls.baseURL + `tv/${numericId}?language=en-US`);
      setRecommenUrl(urls.baseURL + `tv/${numericId}/recommendations?language=en-US&page=1`);
      setVideoUrl(urls.baseURL + `tv/${numericId}/videos?language=en-US`);
    }
  }, [state, numericId]);

  const queryKey = ['newDetails']
  const { isError: detailsError, isLoading: detailsLoading, data: detailsData, refetch: detailsRefetch } = useFetch(detailsUrl, queryKey)

  const queryKeyRecomm = ['newRecomm']
  const { data: recommData, refetch: recommRefetch } = useFetch(recommendationsUrl, queryKeyRecomm)

  const queryKeyVideo = ['newVideo']
  const { data: videoData, refetch: videoRefetch } = useFetch(videoUrl, queryKeyVideo)

  const videosArray = videoData.results ?? [];
  const filterArray = videosArray.find(item => item.type == "Trailer")
  
  useEffect(() => {
    if (detailsUrl) {
      detailsRefetch()
      recommRefetch()
      videoRefetch()
    }
  }, [detailsUrl, recommendationsUrl, videoUrl, detailsRefetch, recommRefetch,videoRefetch])


  return (
    <>
      <section>
      {detailsLoading && <strong>Loading data</strong>}
      {detailsError && <strong>Error fetching data</strong>}
      {detailsData.results ? (
              
          <Overview
            title={detailsData.results.title}
            name={detailsData.results.name}
            backImg={detailsData.results.backdrop_path}
            overview={detailsData.results.overview}
            score={detailsData.results.vote_average}
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