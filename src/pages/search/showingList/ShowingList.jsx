import Poster from '../../../components/poster';
import './ShowingList.css'

function ShowingList() {
  const gridElements = Array.from({ length: 20 }, (_, index) => <Poster key={index} />);


  return (
    <>
      <div className='ShowingList_mainContainer'>

        <div>
          <h2>NOW SHOWING <p>Variable</p></h2>
        </div>

        <div className='list_container'>
          <div className='list_grid'>
            {gridElements}
          </div>
        </div>

      </div>
    </>
  )
}

export default ShowingList