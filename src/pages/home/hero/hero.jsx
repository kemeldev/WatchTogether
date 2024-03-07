import { useEffect, useState } from 'react';
import { johnWickWallpaper } from '../../../assets/images'
// import { JohnWickVideo } from '../../../assets/videos'
import Poster from '../../../components/poster';
import './hero.css'
import { useFetch } from '../../../hooks/useFetch';
import { urlBackgroundImage, urls } from '../../../constants';
import { Link } from 'react-router-dom';

function Hero() {
  const movies = "movies"
  const [url, setUrls] = useState(urls.popularMovies)
  const [activeTab, setActiveTab] = useState('Popular')
  const [backImage, setBackImage] = useState(johnWickWallpaper)
  const handleClick = (tab) => {
    setActiveTab(tab);
    if (tab === 'Trending') {
      setUrls(urls.trendingMovies);
    } else if (tab === 'Popular') {
      setUrls(urls.popularMovies);
    }
  };


  const queryKey = ['popularAndTrendingMovies']
  const { isError, isLoading, data, refetch } = useFetch(url, queryKey)

  const dataToRender = data.results

  const mouseOver = (backImage) => {
    setBackImage(urlBackgroundImage+backImage)
  }

  useEffect(() => {
    refetch()
  }, [url, refetch])

  return (
    <>
      <div className='hero_mainContainer'>

        <div className='hero_mainImageVideo'>
          <div className='hero_imageContainer'>
            <img src={backImage} alt="hero image" />
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
          <h3 className={activeTab === 'Popular' ? 'active' : 'inactive'} onClick={() => handleClick('Popular')}>Popular Movies</h3>
          <h3 className={activeTab === 'Trending' ? 'active' : 'inactive'} onClick={() => handleClick('Trending')}>Trending Movies</h3>
        </div>

        <div className='hero_posterMainContainer'>
          <div className='hero_posterContainer'>

            <div className='hero_posterWrapper'>
            {isLoading && <strong>Loading data</strong>}
            {isError && <strong>Error fetching data</strong>}
            {data.results && data.results.length > 0 ? (
              data.results.map((item) => (
                <Link
                        to={`/details/${item.id}`}
                        state={movies}
                        key={item.id}
                      >
                <div 
                  onMouseEnter={()=> mouseOver(item.backdrop_path)}
                >
                  <Poster
                    title={item.title}
                    score={item.vote_average}
                    posterImg={item.poster_path} 
                    
                  />
                </div>
                </Link>
              ))
            ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero