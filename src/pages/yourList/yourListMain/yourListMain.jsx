import Backdrop from '../../../components/backdrop'
import useMovieStore from '../../../store/movieStore'
import './yourListMain.css'

function YourListMain() {
  const {favoriteList, watchlist } = useMovieStore()

  return(
    <>
      <div className='yourListMain_mainContainer'>
        <div className='yourListMain_grid'>
          {
            favoriteList.map((item, index) => (
              <div className='yourListMain_gridElement' key={index}>
                <Backdrop
                    name={item.name}
                    title={item.title}
                    score={item.vote_average}
                    backImg={item.backdrop_path} 
                  />

              </div>
            ))
          }
        </div>

      </div>
    </>
  )
}

export default YourListMain