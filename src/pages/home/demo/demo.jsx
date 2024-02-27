import Poster from '../../../components/poster';
import './demo.css'

function Demo() {
  const posters = Array.from({ length: 20 }, (_, index) => <Poster key={index} />);

  return (
    <>
      <div className='demo_mainContainer'>

        <div className='demo_popularSeries'>
          <h3>Popular Series</h3>
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