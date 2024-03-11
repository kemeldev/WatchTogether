import { ribbonIcon, starIcon } from '../assets/icons'
import { urlPosterImage } from '../constants'
import PropTypes from 'prop-types';
import './poster.css'
import useMovieStore from '../store/movieStore';
import confetti from 'canvas-confetti';

function Poster({item, title, score, posterImg, name}) {
  const {incrementFavoritesNotification, incrementWatchNotification, addToFavorites,addToWatchlist } = useMovieStore()

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
          <div className='poster_clickable' onClick={(event) => {
            event.preventDefault(); 
            incrementWatchNotification(item);
            addToWatchlist(item);
          }}>
            <h5>Add to watchlist</h5>
            <img src={ribbonIcon} alt="ribbon icon to add movies to watchlist" />
          </div>
          <div className='poster_clickable' onClick={(event) => {
            event.preventDefault(); 
            incrementFavoritesNotification(item)
            addToFavorites(item)
          }}>
            <h5>Add favorites</h5>
            <img src={starIcon} alt="star icon to add movies to favorites" />
          </div>

        </div>

      </div>
    </>
  )
}

Poster.propTypes = {
  title: PropTypes.string,
  score: PropTypes.number,
  posterImg: PropTypes.string,
  name: PropTypes.string,
  item: PropTypes.object,
};

export default Poster