import './recommendations.css'
import Backdrop from '../../../components/backdrop';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';

function Recommendations({recommendations}) {
  const [movieOrTV, setMovieOrTV] = useState("")
  const defineMovieTV = useCallback(() =>{
    const hasTitleKey = recommendations.some(item => Object.prototype.hasOwnProperty.call(item, 'title'));
    if (hasTitleKey) {
      setMovieOrTV("movies");
    } else {
      setMovieOrTV("series");
    }
  }, [recommendations])
  useEffect(() => {
    if(recommendations)
      defineMovieTV()
  }, [movieOrTV, defineMovieTV, recommendations])


  return (
    <>
      <div className='recommendations_mainContainer'>

        <div className='recommendations_popularSeries'>
          <h3>Recommendations</h3>
        </div>

        <div className='recommendations_posterMainContainer'>
          <div className='recommendations_posterContainer'>
            <div className='recommendations_posterWrapper'>
              
            {recommendations && recommendations.length > 0 ? (
            recommendations.map((item) => (
              <Link
                        to={`/details/${item.id}`}
                        state={{movieOrTV, item}}
                        key={item.id}
                        onClick={()=>defineMovieTV()}
                        
                      >
                <div key={item.id}>
                  <Backdrop
                    item={item}
                    name={item.name}
                    title={item.title}
                    score={item.vote_average}
                    backImg={item.backdrop_path} 
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

Recommendations.propTypes = {
  recommendations: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string, 
    title: PropTypes.string, 
    vote_average: PropTypes.number.isRequired, 
    poster_path: PropTypes.string, 
    
  })), 
};

export default Recommendations