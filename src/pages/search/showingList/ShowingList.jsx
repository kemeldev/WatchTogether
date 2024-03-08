import { Link } from 'react-router-dom';
import Poster from '../../../components/poster';
import PropTypes from 'prop-types';
import './ShowingList.css'
import { useEffect, useState } from 'react';

function ShowingList({isLoading, isError, dataToRender, fetchNextPage, hasNextPage, isFetchingNextPage}) {
  const [movieOrTV, setMovieOrTV] = useState("")
  const defineMovieTV = () =>{
    const hasTitleKey = dataToRender.some(item => Object.prototype.hasOwnProperty.call(item, 'title'));
    if (hasTitleKey) {
      setMovieOrTV("movies");
    } else {
      setMovieOrTV("series");
    }
  }

  useEffect(() => {
    if(dataToRender){
      defineMovieTV()
    }
  }, [movieOrTV])

  return (
    <>
      <div className='ShowingList_mainContainer'>

        <div>
          <h2>NOW SHOWING:  <span>Variable</span></h2>
        </div>

        <div className='list_container'>
          <div className='list_grid'>
            {isLoading && <strong>Loading data</strong>}
            {isError && <strong>Error fetching data</strong>}
            {dataToRender && dataToRender.length > 0 ? (
              dataToRender.map((item, index) => (
                <Link
                          to={`/details/${item.id}`}
                          state={{movieOrTV, item}}
                          key={index}
                          
                        >
                  <div key={item.id}>
                    <Poster
                      name={item.name}
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

        <button
          className='list_btn'
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
              ? 'Load More'
              : 'Nothing more to load'}
        </button>

      </div>
    </>
  )
}

ShowingList.propTypes = {
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  hasNextPage: PropTypes.bool,
  isFetchingNextPage: PropTypes.bool,
  dataToRender: PropTypes.array,
  fetchNextPage: PropTypes.func
};


export default ShowingList