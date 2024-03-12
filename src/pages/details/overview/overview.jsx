import { useEffect, useRef, useState } from 'react';
import { playIcon, ribbonIcon, starIcon } from '../../../assets/icons'
import { urlBackgroundImage } from '../../../constants'
import './overview.css'
import PropTypes from 'prop-types';
import PlayTrailer from '../../../components/PlayTrailer';
import useMovieStore from '../../../store/movieStore';

function Overview({item, title, name, overview, score, backImg, videosArray}) {
  const {incrementFavoritesNotification, incrementWatchNotification, addToFavorites,addToWatchlist } = useMovieStore()
  let videoRef = useRef(null)
  const [videoActive, setVideoActive] = useState(false)
  const handleVideo = () => {
    setVideoActive(state => !state)
  }


  let handler = (e)=>{
    if (videoRef.current && !videoRef.current.contains(e.target)) {
      setVideoActive(false);
    }
  } 

  // effect to close the video if it is clicked anywhere outside it
  useEffect(()=> {
    handler()
    document.addEventListener("mousedown", handler)

    return () => {
      document.removeEventListener("mousedown", handler)
    }
  },[])

  const userScore = Math.ceil(score * 10) / 10;
  const displayTitle = title || name;

  const videoKey = ()=>{
    if (videosArray) return videosArray.key
    else return null
  }

  return (
    <>
      <div className='overview_mainContainer'>

        <div className='overview_serieContainer'>
          <div className='overview_backgroundImage'>
            <img src={urlBackgroundImage+backImg} alt="wallpaper image of a serie" />
          </div>

          <article className='overview_description'>
            <div className='overview_title'>
              <h2>{displayTitle}</h2>
              <div className='overview_playTrailer'>
                {videoKey() && <>
                <img onClick={handleVideo} src={playIcon} alt="play button icon" />
                <h3>Play Trailer</h3>
                </>
                }
              </div>
            </div>
            <div>
              <h3>Overview</h3>
              <p>{overview}</p>
            </div>
          </article>

          <article className='overview_actions'>
              <h2>User Score</h2>
              <h2 className='overview_addWatchList' onClick={(event) => {
                event.preventDefault(); 
                incrementWatchNotification(item);
                addToWatchlist(item);
              }}>Add to WatchList</h2>
              <h2 className='overview_addWatchFavorites' onClick={(event) => {
                event.preventDefault(); 
                incrementFavoritesNotification(item);
                addToFavorites(item);
              }}>Add to Favorites</h2>
              <h3 className='score'>{userScore.toFixed(1)}</h3>
              <div className='overview_addWatchList' onClick={(event) => {
                event.preventDefault(); 
                incrementWatchNotification(item);
                addToWatchlist(item);
              }}>
                <img src={ribbonIcon} alt="ribbon icon" />
              </div>
              <div className='overview_addWatchFavorites' onClick={(event) => {
                event.preventDefault(); 
                incrementFavoritesNotification(item);
                addToFavorites(item);
              }}>
                <img src={starIcon} alt="star icon" />
              </div>
          </article>

        </div>

        {videoActive &&
          <PlayTrailer 
            handleVideo={handleVideo}
            videoURL={videoKey()}
            videoRef={videoRef}
          />
        }



      </div>
    </>
  )
}

Overview.propTypes = {
  title: PropTypes.string, 
  name: PropTypes.string, 
  overview: PropTypes.string, 
  score: PropTypes.number,
  backImg: PropTypes.string, 
  videosArray: PropTypes.object,
  item: PropTypes.object
};

export default Overview