import './navbar.css'
import { hamburgerMenu, profileLogo, glassMagnifier } from '../../../assets/icons'
import { useState } from 'react'
import Menu from '../../../components/menu'

function Navbar() {
  const [menuOpen , setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(prevMenuOpen => !prevMenuOpen);
  };

  return (
    <>
      <div className='navbar_mainContainer'>

        <div className='navbar_leftSideContent'>
          <h3>WatchTogether</h3>
          <div className='navbar_hamburgerMenu'>
            <img 
            src={hamburgerMenu}
            onClick={()=>setMenuOpen(!menuOpen)} />
          </div>
        </div>

        <div className='navbar_centerContent'>
          <div >
            WatchTogether
          </div>
          <ul>
            <li>Movies</li>
            <li>Series</li>
            <li>People</li>
          </ul>
        </div>

        <div className='navbar_SearchAndLogin'>
          <div>
            <img src={profileLogo} alt="" />
          </div>
          <div>Login</div>

          <div>
            <img src={glassMagnifier} alt="" />
          </div>
          <div>Search</div>
          
        </div>

        <Menu menuOpen={menuOpen} toggleMenu={toggleMenu}/>

      </div>
      
    </>
  )
}

export default Navbar