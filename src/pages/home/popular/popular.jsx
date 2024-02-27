import { breakingbadPoster, breakingbadwall, frierenPoster, frierenwallpaper } from '../../../assets/images'
import './popular.css'

function Popular() {

  return (
    <>
      <div className='popular_mainContainer'>

        <div className='popular_serieContainer'>
          <div className='popular_backgroundImage'>
            <img src={breakingbadwall} alt="wallpaper image of a serie" />
          </div>

          <article className='popular_section'>
            <div className='popular_posterImage'>
              <img src={breakingbadPoster} alt="poster image of a serie" />
            </div>

            <div className='popular_textContent'>
              <h3>Find immersive, funny, thrilling, and suspensefull experiences. No matter your preference, you’ll find the right choice</h3>

              <h3>BREAKING BAD</h3>
              <button>View Details</button>
            </div>
          </article>

        </div>

        <div className='popular_serieContainer'>
          <div className='popular_backgroundImage'>
            <img src={frierenwallpaper} alt="wallpaper image of a serie" />
          </div>

          <article className='popular_section'>
            <div className='popular_textContent'>
              <h3>Discover new and exiting fantasy worlds</h3>
              <h3>FRIEREN BEYOND JOURNEY’S END</h3>
              <button>View Details</button>
            </div>
            <div className='popular_posterImage'>
              <img src={frierenPoster} alt="poster image of a serie" />
            </div>
          </article>

        </div>

      </div>
    </>
  )
}

export default Popular