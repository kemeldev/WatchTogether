import './SearchParameters.css'
import { chevronRight } from '../../../assets/icons'
import { useState } from 'react'

function SearchParameters() {
  const [searchOpen, setSearchOpen] = useState(true)
  const [sortOpen, setSortOpen] = useState(true)
  const [quickOpen, setQuickOpen] = useState(true)

  return (
    <>
      <div className='SearchParameters_mainContainer'>

        <div className='SearchParameters_paramsContainer'>

          <div className='SearchParameters_searchContainer'>
            <div className='SearchP_title' onClick={()=>setSearchOpen(!searchOpen)}>
              <h3>Search</h3>
              <img 
                src={chevronRight}
                 />
            </div>
            <div className={searchOpen ? "SearchP_search searchOpen" : "SearchP_search"}>
              <hr />
              <form action="/">
                <label htmlFor="search"></label>
                <input type="text" name='search'  />
                <button>Search</button>
              </form>
            </div>
          </div>

          <div className='SearchParameters_SortBy'>
            <div className='SearchP_title' onClick={()=>setSortOpen(!sortOpen)}>
                <h3>Sort By</h3>
                <img 
                  src={chevronRight}
                  />
            </div>
            <div className={`SearchP_sort ${sortOpen ? 'sortOpen' : ''}`}>
            <hr />
            <form>
              <div className="sortItem">
                <label htmlFor="sortName">Name (A-Z)</label>
                <input type="checkbox" id="sortName" name='sortName'/>
              </div>
              <div className="sortItem">
              <label htmlFor="sortRate">Top Rated</label>
              <input type="checkbox" id="sortRate" name='sortRate'/>
              </div>
              <div className="sortItem">
              <label htmlFor="sortYear">Released Year</label>
              <input type="checkbox" id="sortYear" name='sortYear'/>
              </div>
            </form>
            </div>
          </div>

          <div className='SearchParameters_QuickSearch'>
            <div className='SearchP_title' onClick={()=>setQuickOpen(!quickOpen)}>
                  <h3>Quick Search</h3>
                  <img 
                    src={chevronRight}
                    />
            </div>
            <div className={`SearchP_quick ${quickOpen ? 'quickOpen' : ''}`}>
            <hr />
            <form>
              <div className="quickItem">
                <label htmlFor="quickName">Trending</label>
                <input type="checkbox" id="quickName" name='quickName'/>
              </div>
              <div className="quickItem">
                <label htmlFor="quickRate">Top Rated</label>
                <input type="checkbox" id="quickRate" name='quickRate'/>
              </div>
              <div className="quickItem">
                <label htmlFor="quickYear">Popular</label>
                <input type="checkbox" id="quickYear" name='quickYear'/>
              </div>
            </form>
            <h4>Gender</h4>
            <form action="/">
              <label htmlFor="sortName"></label>
              <input type="button" name='sortName'  />
              <label htmlFor="sortRate"></label>
              <input type="checkbox" name='sortRate'  />
              <label htmlFor="sortYear"></label>
              <input type="checkbox" name='sortYear'  />

              <button>Search</button>
            </form>
            </div>
          </div>


        </div>

      </div>
    </>
  )
}

export default SearchParameters