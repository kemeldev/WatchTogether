import { johnWickWallpaper } from '../../../assets/images'
import { JohnWickVideo } from '../../../assets/videos'
import Poster from '../../../components/poster';
import './hero.css'
import { Suspense, lazy, useEffect, useState } from 'react'

function Hero() {
  const [showLazyLoadedV, setShowLazyLoadedV] = useState(false);
  const posters = Array.from({ length: 20 }, (_, index) => <Poster key={index} />);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLazyLoadedV(true);
    }, 3000);
    

    return () => {
      clearTimeout(timer);}
  }, []);


  const LazyLoadedV = lazy(() => import("../../../components/LazyLoadedVideo"))

  return (
    <>
      <div className='hero_mainContainer'>

        <div className='hero_mainImageVideo'>
          <div className='hero_imageContainer'>
            <img src={johnWickWallpaper} alt="hero image" />
          </div>
        </div>

        
          {/* <div className='hero_videoContainer'>
          {showLazyLoadedV && (
            <Suspense fallback={<div>Loading...</div>}>
              <LazyLoadedV />
            </Suspense>
          )}
          </div> */}

        <div className='hero_textContent'>
          <h2>Discover movies, series and more</h2>
        </div>

        <div className='hero_popularMovies'>
          <h3>Popular Movies</h3>
        </div>

        <div className='hero_posterMainContainer'>
        <div className='hero_posterContainer'>
          <div className='hero_posterWrapper'>
            {posters}
          </div>
        </div>
        </div>



        {/* 
          <div className='hero_videoContainer'>
          {showLazyLoadedV && (
            <Suspense fallback={<div>Loading...</div>}>
              <LazyLoadedV />
            </Suspense>
          )}
          </div> */}


      </div>
    </>
  )
}

export default Hero