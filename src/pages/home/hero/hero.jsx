import { johnWickWallpaper } from '../../../assets/images'
import { JohnWickVideo } from '../../../assets/videos'
import './hero.css'
import ReactPlayer from 'react-player'

function Hero() {

  return (
    <>
      <div className='hero_mainContainer'>

        <div className='hero_mainImageVideo'>
          <div className='hero_imageContainer'>
            <img src={johnWickWallpaper} alt="hero image" />
          </div>

          {/* <div className='hero_videoContainer'>
            <video loop muted autoPlay controls >
              <source src={JohnWickVideo} />
            </video>
          </div> */}

        </div>


      </div>
    </>
  )
}

export default Hero