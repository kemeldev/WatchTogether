import { useEffect, useState } from 'react';
import { johnWickWallpaper } from '../../../assets/images'
// import { JohnWickVideo } from '../../../assets/videos'
import Poster from '../../../components/poster';
import './hero.css'
import { useFetch } from '../../../hooks/useFetch';
import { urls } from '../../../constants';

function Hero() {
  const [url, setUrls] = useState(urls.popularMovies)
  const [activeTab, setActiveTab] = useState('Popular')
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

  useEffect(() => {
    refetch()
  }, [url, refetch])

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
            <div key={item.id}>
              <Poster
                title={item.title}
                
                score={item.vote_average}
                posterImg={item.poster_path} 
              />
            </div>
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