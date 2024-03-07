import './SearchNavbar.css'
import { hamburgerMenu, profileLogo } from '../../../assets/icons'
import { useState } from 'react'
import Menu from '../../../components/menu'

function SearchNavbar() {
  const [menuOpen , setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(prevMenuOpen => !prevMenuOpen);
  };

  return (
    <>
      <div className='SearchNavbar_mainContainer'>

        <div className='SearchNavbar_leftSideContent'>
          <h3>WatchTogether</h3>
          <div className='SearchNavbar_hamburgerMenu'>
            <img 
            src={hamburgerMenu}
            onClick={()=>setMenuOpen(!menuOpen)} />
          </div>
        </div>

        <div className='SearchNavbar_centerContent'>
          <div >
            WatchTogether
          </div>
          <ul>
            <li>Movies</li>
            <li>Series</li>
            <li>All</li>
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

export default SearchNavbar
