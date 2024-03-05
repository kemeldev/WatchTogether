import { playIcon, ribbonIcon, starIcon } from '../../../assets/icons'
import { creatorWallpaper } from '../../../assets/images'
import './overview.css'

function Overview() {

  return (
    <>
      <div className='overview_mainContainer'>

        <div className='overview_serieContainer'>
          <div className='overview_backgroundImage'>
            <img src={creatorWallpaper} alt="wallpaper image of a serie" />
          </div>

          <article className='overview_description'>
            <div className='overview_title'>
              <h2>Movie Title</h2>
              <img src={playIcon} alt="play button icon" />
              <h3>Play Trailer</h3>
            </div>
            <div>
              <h3>Overview</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, nihil enim possimus eligendi odio asperiores. Similique dignissimos suscipit ullam. Odit maiores corporis est ullam, atque explicabo expedita eaque voluptate obcaecati?</p>
            </div>
          </article>

          <article className='overview_actions'>
              <h2>User Score</h2>
              <h2>Add to WatchList</h2>
              <h2>Add to Favorites</h2>
              <h3 className='score'>7.5</h3>
              <div>
                <img src={ribbonIcon} alt="ribbon icon" />
              </div>
              <div>
                <img src={starIcon} alt="star icon" />
              </div>
          </article>

        </div>

        

      </div>
    </>
  )
}

export default Overview