import './SearchParameters.css'
import { chevronRight } from '../../../assets/icons'
import { useState } from 'react'
import PropTypes from 'prop-types';

function SearchParameters({handleSearchSubmit, searchFormError, handleSortChange, sortedDatatoNull, sortByRank, sortByReleasedYear}) {
  const [searchOpen, setSearchOpen] = useState(false)
  const [sortOpen, setSortOpen] = useState(false)
  const [quickOpen, setQuickOpen] = useState(false)

  const [sortNameChecked, setSortNameChecked] = useState(false);
  const [sortRateChecked, setSortRateChecked] = useState(false);
  const [sortYearChecked, setSortYearChecked] = useState(false);

  // logic to unchecked boxes
  const handleCheckboxChange = (name) => {
    // If the checkbox is clicked again, uncheck it and return early
    if (
      (name === 'sortName' && sortNameChecked) ||
      (name === 'sortRate' && sortRateChecked) ||
      (name === 'sortYear' && sortYearChecked)
    ) {
      setSortNameChecked(false);
      setSortRateChecked(false);
      setSortYearChecked(false);
      sortedDatatoNull()
      return;
    }
  
    // Update the state based on which checkbox is clicked
    if (name === 'sortName') {
      setSortNameChecked(true);
      setSortRateChecked(false);
      setSortYearChecked(false);
      // Apply method for sortName
    } else if (name === 'sortRate') {
      setSortRateChecked(true);
      setSortNameChecked(false);
      setSortYearChecked(false);
      // Apply method for sortRate
    } else if (name === 'sortYear') {
      setSortYearChecked(true);
      setSortNameChecked(false);
      setSortRateChecked(false);
      // Apply method for sortYear
    }
  };

  return (
    <>
      <div className='SearchParameters_mainContainer'>

        <div className='SearchParameters_paramsContainer'>

          {/* Search form */}
          <div className='SearchParameters_searchContainer'>
            <div className='SearchP_title' onClick={()=>setSearchOpen(!searchOpen)}>
              <h3>Search Any</h3>
              <img 
                src={chevronRight}
                className={!searchOpen ? 'return' : 'rotate-chevron'}
                alt="Chevron Right"
              />
            </div>
            <div className={searchOpen ? "SearchP_search searchOpen" : "SearchP_search"}>
              <hr />
              <form onSubmit={handleSearchSubmit} method='get'>
                <label htmlFor="specificSearch"></label>
                <input type="text" name='specificSearch' placeholder='Avengers, Friends etc'  />
                <div className='searchForm_error'>
                  {searchFormError && searchFormError}
                </div>
                <button>Search</button>
              </form>
            </div>
          </div>

          {/* SortBy form */} 
          <div className='SearchParameters_SortBy'>
            <div className='SearchP_title' onClick={()=>setSortOpen(!sortOpen)}>
                <h3>Sort current list By</h3>
                <img 
                  src={chevronRight}
                  className={!sortOpen ? 'return' : 'rotate-chevron'}
                  alt="Chevron Right"
              />
            </div>
            <div className={`SearchP_sort ${sortOpen ? 'sortOpen' : ''}`}>
            <hr />
            <form method='get' >
              <div className="sortItem">
                <label htmlFor="sortName">Name (A-Z)</label>
                <input type="checkbox" id="sortName" name='sortName' checked={sortNameChecked} onChange={() => {handleSortChange(), handleCheckboxChange('sortName')}}/>
              </div>
              <div className="sortItem">
                <label htmlFor="sortRate">Top Rated</label>
                <input type="checkbox" id="sortRate" name='sortRate' checked={sortRateChecked} onChange={() => { sortByRank(), handleCheckboxChange('sortRate')}}/>
              </div>
              <div className="sortItem">
                <label htmlFor="sortYear">Released Year</label>
                <input type="checkbox" id="sortYear" name='sortYear' checked={sortYearChecked} onChange={() => { sortByReleasedYear(), handleCheckboxChange('sortYear')}}/>
              </div>
            </form>
            </div>
          </div>

          {/* QuickSearch form */}
          <div className='SearchParameters_QuickSearch'>
            <div className='SearchP_title' onClick={()=>setQuickOpen(!quickOpen)}>
                  <h3>Quick Search Parameters</h3>
                  <img 
                    src={chevronRight}
                    className={!quickOpen ? 'return' : 'rotate-chevron'}
                    alt="Chevron Right"
              />
            </div>
            <div className={`SearchP_quick ${quickOpen ? 'quickOpen' : ''}`}>
            <hr />
            <form>
              <div className="quickItem">
                <label htmlFor="quickName">Trending</label>
                <input type="checkbox" id="quickName" name='quickName' />
              </div>
              <div className="quickItem">
                <label htmlFor="quickRate">Top Rated</label>
                <input type="checkbox" id="quickRate" name='quickRate' />
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

SearchParameters.propTypes = {
  handleSearchSubmit: PropTypes.func,
  searchFormError: PropTypes.string,
  handleSortChange: PropTypes.func,
  sortedDatatoNull: PropTypes.func,
  sortByReleasedYear: PropTypes.func,
  sortByRank: PropTypes.func,
};

export default SearchParameters