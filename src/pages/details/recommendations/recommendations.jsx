import './recommendations.css'
import Backdrop from '../../../components/backdrop';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Recommendations({recommendations}) {
  const [movieOrTV, setMovieOrTV] = useState("movie")
  const defineMovieTV = () =>{
    if(recommendations.includes(item => item.title)){
      setMovieOrTV("movies")
    } else {
      setMovieOrTV("series")
    }
  }

  useEffect(() => {
    if(recommendations){
      defineMovieTV()
    }
  }, [movieOrTV])


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
                        state={movieOrTV}
                        key={item.id}
                        
                      >
                <div key={item.id}>
                  <Backdrop
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