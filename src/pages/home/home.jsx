import Demo from './demo/demo'
import Footer from './footer/footer'
import Hero from './hero/hero'
import './home.css'
import Navbar from './navbar/navbar'
import Popular from './popular/popular'

function Home() {

  return (
    <>
        <Navbar />

      <section style={{position: "relative"}}>
        <Hero />
      </section>

        <Popular />

        <Demo />

        <Footer />
    </>
  )
}

export default Home
