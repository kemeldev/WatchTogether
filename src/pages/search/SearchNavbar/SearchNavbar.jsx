import './SearchNavbar.css'
import { hamburgerMenu, profileLogo, ribbonIcon, starIcon } from '../../../assets/icons'
import { useState } from 'react'
import Menu from '../../../components/menu'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import useMovieStore from '../../../store/movieStore'


function SearchNavbar({handleSearchingChange, sortedDatatoNull}) {
  const {favoritesNotificacion, watchNotificacion, resetNotifications } = useMovieStore()
  const [menuOpen , setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(prevMenuOpen => !prevMenuOpen);
  };

  return (
    <>
      <div className='SearchNavbar_mainContainer'>

        <div className='SearchNavbar_leftSideContent'>
          <Link to="/WatchTogether">
            <h3>WatchTogether</h3>
          </Link>
          <div className='SearchNavbar_hamburgerMenu'>
            <img 
            src={hamburgerMenu}
            onClick={()=>setMenuOpen(!menuOpen)} />
          </div>
        </div>

        <div className='SearchNavbar_centerContent'>
          <Link to="/WatchTogether">
            <h3>WatchTogether</h3>
          </Link>
          <ul>
            <li onClick={() =>{sortedDatatoNull(), handleSearchingChange('popularMovies')}}>Movies</li>
            <li onClick={() =>{sortedDatatoNull(), handleSearchingChange('popularSeries')}}>Series</li>
            <li onClick={() =>{sortedDatatoNull(), handleSearchingChange('trendingAll')}}>All</li>
          </ul>
        </div>

        <Link className='navbar_SearchAndLogin'  to="/yourList" onClick={() =>resetNotifications()}>
          <div className='navbar_watch iconSearch'>
            <img src={ribbonIcon} alt="ribbon icon image" />
            {watchNotificacion > 0 && ( 
              <div className='navbar_watchNotificacion'>
                  {watchNotificacion}
              </div>
              )}
          </div>
          <div className='navbar_watch iconSearch'>
            <img src={starIcon} alt="glass magnifier logo" />
            {favoritesNotificacion > 0 && ( 
                <div className='navbar_watchNotificacion'>
                  {favoritesNotificacion}
              </div>
              )}
          </div>
          </Link>

        <Menu menuOpen={menuOpen} toggleMenu={toggleMenu}/>

      </div>
      
    </>
  )
}

SearchNavbar.propTypes = {
  handleSearchingChange: PropTypes.func,
  sortedDatatoNull: PropTypes.func,
};

export default SearchNavbar
