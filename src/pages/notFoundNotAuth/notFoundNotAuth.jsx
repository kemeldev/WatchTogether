import { goBack } from '../../assets/icons'
import { oops } from '../../assets/images'
import './notFoundNotAuth.css'

function NotFoundNotAuth() {

  return (
    <>
      <main className='not_mainContainer'>
        <div className='not_imageContainer'>
          <img src={oops} alt="error message image" />
        </div>

        <div className='not_textContent'>
          <p>OOOPS!</p>
          <p>
It appears that the resource you are attempting to access either does not exist or you do not have the necessary permissions to access it.</p>
          <button>
            <img src={goBack} alt="go back icon" /> 
            Go Back
          </button>
        </div>
        
        

      </main>
    </>
  )
}

export default NotFoundNotAuth