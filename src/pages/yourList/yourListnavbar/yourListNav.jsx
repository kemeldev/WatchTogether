
import { Link } from 'react-router-dom'
import './yourListNav.css'
import PropTypes from 'prop-types';

function YourListNav({changeShowing}) {
  return(
    <>
      <nav className='yourlistNav_mainContainer'>
        <div className='yourListNav_mainLogo'>
          <Link to="/WatchTogether">
          <h3>WatchTogether</h3>
          </Link>
        </div>

        <div className='yourlistNav_lists'>
          <h3 onClick={() => changeShowing()}>WatchLater List</h3>
          <h3 onClick={() => changeShowing()}>Favourites List</h3>
        </div>
      </nav>

      <div className='yourlistNav_mainContainerBack'>

      </div>
    </>
  )

}

YourListNav.propTypes = {
  changeShowing: PropTypes.func
} 

export default YourListNav
