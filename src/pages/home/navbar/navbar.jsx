import './navbar.css'
import { hamburgerMenu, starIcon, ribbonIcon } from '../../../assets/icons'
import { useState } from 'react'
import Menu from '../../../components/menu'
import { Link } from 'react-router-dom'
import useMovieStore from '../../../store/movieStore'

function Navbar() {
  const {favoritesNotificacion, watchNotificacion, resetNotifications } = useMovieStore()
  const [menuOpen , setMenuOpen] = useState(false)
  const series = "popularSeries"
  const movies = "popularMovies"
  
  const toggleMenu = () => {
    setMenuOpen(prevMenuOpen => !prevMenuOpen);
  };

  return (
    <>
      <div id='navbar' className='navbar_mainContainer'>

        <div className='navbar_leftSideContent'>
          <Link to={"/"} >
            <h3>
              WatchTogether
            </h3>
          </Link>
          <div className='navbar_hamburgerMenu'>
            <img 
            src={hamburgerMenu}
            onClick={()=>setMenuOpen(!menuOpen)} />
          </div>
        </div>

        <div className='navbar_centerContent'>
          <Link to={"/"} >
            <div>
              WatchTogether
            </div>
          </Link>
          <ul>
            <Link to={"/search"} state={movies}>
              <li>Movies</li>
            </Link>
            <Link to={"/search"} state={series}>
              <li>Series</li>
            </Link>
          </ul>
        </div>

        {/* <div className='navbar_SearchAndLogin'> */}
          <Link className='navbar_SearchAndLogin'  to="/yourList" onClick={() =>resetNotifications()}>
          <div className='navbar_watch icon'>
            <img src={ribbonIcon} alt="ribbon icon image" />
            {watchNotificacion > 0 && ( 
                <div className='navbar_watchNotificacion'>
                  {watchNotificacion}
              </div>
              )}
          </div>
          <div className='navbar_watch word'>
            <h4>WatchLater</h4>
            {watchNotificacion > 0 && ( 
                <div className='navbar_watchNotificacion'>
                  {watchNotificacion}
              </div>
              )}
          </div>

          <div className='navbar_watch icon'>
            <img src={starIcon} alt="glass magnifier logo" />
            {favoritesNotificacion > 0 && ( 
                <div className='navbar_watchNotificacion'>
                  {favoritesNotificacion}
              </div>
              )}
          </div>
          <div className='navbar_watch word'>
            <h4>Favorites</h4>
            {favoritesNotificacion > 0 && ( 
                <div className='navbar_watchNotificacion'>
                  {favoritesNotificacion}
              </div>
              )}
          </div>
          </Link>
        {/* </div> */}

        <Menu menuOpen={menuOpen} toggleMenu={toggleMenu}/>

      </div>
      
    </>
  )
}

export default Navbar