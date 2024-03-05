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

      <section style={{display:"flex", position:"relative", width: "99vw"}}>
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