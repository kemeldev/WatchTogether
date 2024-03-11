import { closeX } from '../assets/icons'
import PropTypes from 'prop-types';
import './menu.css'
import { Link } from 'react-router-dom';

function Menu({menuOpen, toggleMenu }) {
  const popularSeries = "popularSeries"
  const popularMovies = "popularMovies"
  const trendingSeries = "trendingSeries"
  const trendingMovies = "trendingMovies"

  return (
    <>
      <div className={menuOpen ? "menu_mainContainer menuOpen" :  "menu_mainContainer"}>

        <div className='menu_closeX'>
          <img src={closeX} onClick={toggleMenu} />
        </div>

        <div className='menu_menuTitle'>
          <h3>Menu</h3>
          <hr />

        <ul>
          <li><h3>MOVIES</h3></li>
          <Link to={"/search"} state={popularMovies}>
              <li><h4>Popular</h4></li>
          </Link>
          
          <Link to={"/search"} state={trendingMovies}>
              <li><h4>Trending</h4></li>
          </Link>

          <li><h3>SERIES</h3></li>
          <Link to={"/search"} state={popularSeries}>
              <li><h4>Popular</h4></li>
          </Link>
          <Link to={"/search"} state={trendingSeries}>
              <li><h4>Trending</h4></li>
          </Link>

          <li><h3>YOUR LISTS</h3></li>
          <li><h4>Watchlist</h4></li>
          <li><h4>Favorites</h4></li>
        </ul>

        </div>

        <div className='menu_otherTitle'>
          <h3>Other</h3>
          <hr />

          <ul>
            <li><h4>About Us</h4></li>
            <li><h4>Legal Information</h4></li>
          </ul>
        </div>



      </div>
    </>
  )
}

Menu.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired
}

export default Menu