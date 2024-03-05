import Footer from '../home/footer/footer'
import './details.css'
import Overview from './overview/overview'
import Recommendations from './recommendations/recommendations'

function Details() {

  return (
    <>
      <section>
        <Overview />
      </section>

      <section>
        <Recommendations />
      </section>

      <section>
        <Footer />
      </section>
    </>
  )
}

export default Details