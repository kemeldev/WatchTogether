
import { Link } from 'react-router-dom'
import './yourListNav.css'

function YourListNav() {
  return(
    <>
      <nav className='yourlistNav_mainContainer'>
        <div className='yourListNav_mainLogo'>
          <Link to="/">
          <h3>WatchTogether</h3>
          </Link>
        </div>

        <div className='yourlistNav_lists'>
          <h3>WatchLater List</h3>
          <h3>Favourites List</h3>
        </div>
      </nav>

      <div className='yourlistNav_mainContainerBack'>

      </div>
    </>
  )

}

export default YourListNav
