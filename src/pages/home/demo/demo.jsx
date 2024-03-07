import { useEffect, useState } from 'react';
import Poster from '../../../components/poster';
import './demo.css'
import { useFetch } from '../../../hooks/useFetch';
import { urls } from '../../../constants';

function Demo() {
  const [url, setUrls] = useState(urls.popularSeries)
  const [activeTab, setActiveTab] = useState('Popular')
  const handleClick = (tab) => {
    setActiveTab(tab);
    if (tab === 'Trending') {
      setUrls(urls.trendingSeries);
    } else if (tab === 'Popular') {
      setUrls(urls.popularSeries);
    }
  };

  const queryKey = ['popularAndTrendingSeries']
  const { isError, isLoading, data, refetch } = useFetch(url, queryKey)

  useEffect(() => {
    refetch()
  }, [url, refetch])

  return (
    <>
      <div className='demo_mainContainer'>

      <div className='demo_popularSeries'>
          <h3 className={activeTab === 'Popular' ? 'active' : 'inactive'} onClick={() => handleClick('Popular')}>Popular Series</h3>
          <h3 className={activeTab === 'Trending' ? 'active' : 'inactive'} onClick={() => handleClick('Trending')}>Trending Series</h3>
        </div>

        <div className='demo_posterMainContainer'>
          <div className='demo_posterContainer'>
            <div className='demo_posterWrapper'>
              
            {isLoading && <strong>Loading data</strong>}
            {isError && <strong>Error fetching data</strong>}
            {data.results && data.results.length > 0 ? (
              data.results.map((item) => (
                <div key={item.id}>
                  <Poster
                    name={item.name}
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

export default Demo