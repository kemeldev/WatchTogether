import { useState } from 'react';
import Poster from '../../../components/poster';
import './demo.css'

function Demo() {
  const [activeTab, setActiveTab] = useState('Popular');
  const handleClick = (tab) => {
    setActiveTab(tab);
  };
  const posters = Array.from({ length: 20 }, (_, index) => <Poster key={index} />);

  return (
    <>
      <div className='demo_mainContainer'>

      <div className='hero_popularSeries'>
          <h3 className={activeTab === 'Popular' ? 'active' : 'inactive'} onClick={() => handleClick('Popular')}>Popular Series</h3>
          <h3 className={activeTab === 'Trending' ? 'active' : 'inactive'} onClick={() => handleClick('Trending')}>Trending Series</h3>
        </div>

        <div className='demo_posterMainContainer'>
          <div className='demo_posterContainer'>
            <div className='demo_posterWrapper'>
              {posters}
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Demo