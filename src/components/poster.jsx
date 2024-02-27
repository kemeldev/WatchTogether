import { ribbonIcon, starIcon } from '../assets/icons'
import { openheimerposter } from '../assets/images'
import './poster.css'

function Poster() {
  

  return (
    <>
      <div className='poster_mainContainer'>
        <div className='poster_imageContainer'>
          <img src={openheimerposter} alt="poster image" />
        </div>

        <div className='poster_textContent'>

          <h3>Title goes hessd</h3>
          <div>
            <h5>Users Score</h5>
            <h4>7.5</h4>
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