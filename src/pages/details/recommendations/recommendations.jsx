import './recommendations.css'
import Poster from '../../../components/poster';
import Backdrop from '../../../components/backdrop';

function Recommendations() {
  const posters = Array.from({ length: 20 }, (_, index) => <Backdrop key={index} />);

  return (
    <>
      <div className='recommendations_mainContainer'>

        <div className='recommendations_popularSeries'>
          <h3>Recommendations</h3>
        </div>

        <div className='recommendations_posterMainContainer'>
          <div className='recommendations_posterContainer'>
            <div className='recommendations_posterWrapper'>
              {posters}
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Recommendations