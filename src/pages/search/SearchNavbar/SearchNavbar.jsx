import './SearchNavbar.css'
import { hamburgerMenu, profileLogo } from '../../../assets/icons'
import { useState } from 'react'
import Menu from '../../../components/menu'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';


function SearchNavbar({handleSearchingChange, sortedDatatoNull}) {
  const [menuOpen , setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(prevMenuOpen => !prevMenuOpen);
  };

  return (
    <>
      <div className='SearchNavbar_mainContainer'>

        <div className='SearchNavbar_leftSideContent'>
          <Link to="/">
            <h3>WatchTogether</h3>
          </Link>
          <div className='SearchNavbar_hamburgerMenu'>
            <img 
            src={hamburgerMenu}
            onClick={()=>setMenuOpen(!menuOpen)} />
          </div>
        </div>

        <div className='SearchNavbar_centerContent'>
          <Link to="/">
            <h3>WatchTogether</h3>
          </Link>
          <ul>
            <li onClick={() =>{sortedDatatoNull(), handleSearchingChange('popularMovies')}}>Movies</li>
            <li onClick={() => handleSearchingChange('popularSeries')}>Series</li>
            <li onClick={() => handleSearchingChange('trendingAll')}>All</li>
          </ul>
        </div>

        <div className='SearchNavbar_SearchAndLogin'>
          <div>
            <img src={profileLogo} alt="" />
          </div>
          

          
          
        </div>

        <Menu menuOpen={menuOpen} toggleMenu={toggleMenu}/>

      </div>
      
    </>
  )
}

SearchNavbar.propTypes = {
  handleSearchingChange: PropTypes.func,
};

export default SearchNavbar
