import './footer.css'

function Footer() {

  const scrollToSection= (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <footer className='footer_mainContainer'>
        <h2 onClick={() => scrollToSection('navbar')} >WatchTogether</h2>
        
        <div className='footer_list'>
          <ul>About Us
            <li>About the app</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className='footer_list'>
          <ul>Legal
            <li>Terms of use</li>
            <li>DMCA Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className='footer_list'>
          <ul>Get Involved
            <li>Support the project</li>
            <li>Connect with your friends</li>
          </ul>
        </div>

      </footer>
    </>
  )
}

export default Footer