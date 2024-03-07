import { useState } from 'react';
import { playIcon, ribbonIcon, starIcon } from '../../../assets/icons'
import { urlBackgroundImage } from '../../../constants'
import './overview.css'
import PropTypes from 'prop-types';
import PlayTrailer from '../../../components/PlayTrailer';

function Overview({title, name, overview, score, backImg, videoURL}) {

  const [videoActive, setVideoActive] = useState(false)
  const handleVideo = () => {
    setVideoActive(state => !state)
  }

  const userScore = Math.ceil(score * 10) / 10;
  const displayTitle = title || name;

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
              <img onClick={handleVideo} src={playIcon} alt="play button icon" />
              <h3>Play Trailer</h3>
            </div>
            <div>
              <h3>Overview</h3>
              <p>{overview}</p>
            </div>
          </article>

          <article className='overview_actions'>
              <h2>User Score</h2>
              <h2>Add to WatchList</h2>
              <h2>Add to Favorites</h2>
              <h3 className='score'>{userScore.toFixed(1)}</h3>
              <div>
                <img src={ribbonIcon} alt="ribbon icon" />
              </div>
              <div>
                <img src={starIcon} alt="star icon" />
              </div>
          </article>

        </div>

        {videoActive &&
          <PlayTrailer 
            handleVideo={handleVideo}
            videoURL={videoURL}
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
  videoURL: PropTypes.string,
};

export default Overview