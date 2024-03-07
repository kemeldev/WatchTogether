import Footer from '../home/footer/footer'
import SearchNavbar from './SearchNavbar/SearchNavbar'
import SearchParameters from './SearchParameters.jsx/SearchParameters'
import './search.css'
import ShowingList from './showingList/ShowingList'

function Search() {

  return (
    <>
      <section>
        <SearchNavbar />
      </section>

      <section className='search_paramsAndList'>
        <SearchParameters />
        <ShowingList />
      </section>

      <section>
        <Footer />
      </section>
    </>
  )
}

export default Search