import { useEffect, useState } from 'react';
import useMovieStore from '../../../store/movieStore'
import './yourListMain.css'
import PropTypes from 'prop-types';
import YourListElement from '../../../components/yourListElement';


function YourListMain({showingList}) {
  const {favoriteList, watchlist } = useMovieStore()
  const [dataToRender, setDataToRender] = useState(favoriteList)

  const listToRender = () => {
    if (showingList) setDataToRender(favoriteList)
    else setDataToRender(watchlist)
  }

  useEffect(() => {
    listToRender()
  }, [showingList, favoriteList, watchlist])

  return(
    <>
      <div className='yourListMain_mainContainer'>
      <div className='yourListMain_flex'>
        {dataToRender.length === 0 ? (
          <div className='noElementsMessage'>
            <p>No elements have been added yet to the list</p>
            <p>Navigate though our app and create your own list</p>
          </div>
        ) : (
          dataToRender.map((item, index) => (
            <div className='yourListMain_flexElement' key={index}>
              <YourListElement
                item={item}
                favoritesOrWatchList={{showingList}}
                name={item.name}
                title={item.title}
                score={item.vote_average}
                posterImg={item.poster_path}  
              />
            </div>
          ))
        )}
      </div>

      </div>
    </>
  )
}

YourListMain.propTypes = {
  showingList: PropTypes.bool
} 


export default YourListMain