import { ribbonIcon, starIcon } from '../assets/icons'
import { urlBackgroundImage } from '../constants';
import PropTypes from 'prop-types';
import './backdrop.css'
import useMovieStore from '../store/movieStore';

function Backdrop({item, backImg, title, name, score}) {
  const {incrementFavoritesNotification, incrementWatchNotification, addToFavorites,addToWatchlist } = useMovieStore()
  
  const userScore = Math.ceil(score * 10) / 10;
  const displayTitle = title || name;

  return (
    <>
      <div className='backdrop_mainContainer'>
        <div className='backdrop_imageContainer'>
          <img src={urlBackgroundImage+backImg} alt="backdrop image" />
        </div>

        <div className='backdrop_textContent'>

          <h3>{displayTitle}</h3>
          <div>
            <h5>User Score</h5>
            <h4>{userScore}</h4>
          </div>
          <div className='poster_clickable addWatchList' onClick={(event) => {
            event.preventDefault(); 
            incrementWatchNotification(item);
            addToWatchlist(item);
          }}>
            <h5>Add to watchlist</h5>
            <img src={ribbonIcon} alt="ribbon icon to add movies to watchlist" />
          </div>
          <div  className='poster_clickable addFavorite' onClick={(event) => {
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

Backdrop.propTypes = {
  backImg: PropTypes.string, 
  title: PropTypes.string, 
  name: PropTypes.string, 
  score: PropTypes.number, 
  item: PropTypes.object,
};

export default Backdrop