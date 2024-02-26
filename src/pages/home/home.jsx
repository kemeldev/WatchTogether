import Demo from './demo/demo'
import Footer from './footer/footer'
import Hero from './hero/hero'
import './home.css'
import Navbar from './navbar/navbar'
import Popular from './popular/popular'

function Home() {

  return (
    <>
      <section>
        <Navbar />
      </section>

      <section style={{position: "relative"}}>
        <Hero />
      </section>

      <section>
        <Popular />
      </section>

      <section>
        <Demo />
      </section>

      <section>
        <Footer />
      </section>
    </>
  )
}

export default Home
