import { ribbonIcon, starIcon } from '../assets/icons'
import { urlPosterImage } from '../constants'
import './poster.css'

function Poster({title, score, posterImg, name}) {
  
  const userScore = Math.ceil(score * 10) / 10;
  const displayTitle = title || name;

  return (
    <>
      <div className='poster_mainContainer'>
        <div className='poster_imageContainer'>
          <img src={urlPosterImage+posterImg} alt="poster image" />
          <p>{displayTitle}</p>
        </div>

        <div className='poster_textContent'>

          <h3>{displayTitle}</h3>
          <div>
            <h5>Users Score</h5>
            <h4>{userScore.toFixed(1)}</h4>
          </div>
          <div>
            <h5>Add to watchlist</h5>
            <img src={ribbonIcon} alt="ribbon icon to add movies to watchlist" />
          </div>
          <div>
            <h5>Add favorites</h5>
            <img src={starIcon} alt="star icon to add movies to favorites" />
          </div>

        </div>

      </div>
    </>
  )
}

export default Poster