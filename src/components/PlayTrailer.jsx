import PropTypes from 'prop-types';
import './PlayTrailer.css'

function PlayTrailer({videoURL, handleVideo}) {
  

  return (
    <>
      <div className='playTrailer_mainContainer'>
        <iframe
          title="YouTube Video"
          width="50%"
          height="50%"
          src={`https://www.youtube.com/embed/${videoURL}?autoplay=1`}
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>

        <button className='closeVideo' onClick={handleVideo}>CLOSE VIDEO</button>
      </div>
    </>
  )
}

PlayTrailer.propTypes = {
  videoURL: PropTypes.string, 
  handleVideo: PropTypes.func,
};

export default PlayTrailer