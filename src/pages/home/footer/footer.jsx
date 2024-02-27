import './footer.css'

function Footer() {

  return (
    <>
      <footer className='footer_mainContainer'>
        <h2>WatchTogether</h2>
        
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