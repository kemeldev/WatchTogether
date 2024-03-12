import { trashIcon } from '../assets/icons'
import { urlPosterImage } from '../constants'
import PropTypes from 'prop-types';
import './yourListElement.css'
import useMovieStore from '../store/movieStore';
import { Link } from 'react-router-dom';

function YourListElement({item, title, score, posterImg, name, favoritesOrWatchList}) {
  const {removeFromFavorites, removeFromWatchList } = useMovieStore()

  const removeFromList = () =>{
    if(favoritesOrWatchList.showingList) {
       removeFromFavorites(posterImg)
    }
    else {
      return removeFromWatchList(posterImg)
    }
  }

  console.log(favoritesOrWatchList.showingList);

  const userScore = Math.ceil(score * 10) / 10;
  const displayTitle = title || name;

  return (
    <>
      <div className='yourElement_mainContainer'>
        <div className='yourElement_imageContainer'>
          <img src={urlPosterImage+posterImg} alt="poster image" />
        </div>

        <div className='yourElement_textContent'>

          <h3>{displayTitle}</h3>
          <div className='yourElement_userScore'>
            <h5>Users Score</h5>
            <h4>{userScore.toFixed(1)}</h4>
          </div>
          <Link
              to={`/details/${item.id}`}
              state={{item}}
            >
          <div className='yourElement_goDetails'>
            <h5>View Details</h5>
          </div>
          </Link>

          <div className='yourElement_userScore eliminate' onClick={()=>removeFromList()}>
            <h5>Eliminate from list</h5>
            <div>
              <img src={trashIcon} alt="trash icon" />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

YourListElement.propTypes = {
  title: PropTypes.string,
  score: PropTypes.number,
  posterImg: PropTypes.string,
  name: PropTypes.string,
  item: PropTypes.object,
  favoritesOrWatchList: PropTypes.bool,
};

export default YourListElement