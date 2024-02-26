import { closeX } from '../assets/icons'
import PropTypes from 'prop-types';
import './menu.css'

function Menu({menuOpen, toggleMenu }) {

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
          <li><h4>Popular</h4></li>
          <li><h4>Trending</h4></li>

          <li><h3>SERIES</h3></li>
          <li><h4>Popular</h4></li>
          <li><h4>Trending</h4></li>

          <li><h3>LOGIN</h3></li>
          <li><h3>WATCHLIST</h3></li>
          <li><h3>FAVORITES</h3></li>
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