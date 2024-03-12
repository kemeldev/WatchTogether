
import { useState } from 'react'
import Footer from '../home/footer/footer'
import './yourList.css'
import YourListMain from './yourListMain/yourListMain'
import YourListNav from './yourListnavbar/yourListNav'

function YourList() {
  const [showingList , setShowingList] = useState(true)
  const changeShowing = () => setShowingList((prevState) => !prevState )
  return(
    <>
      <YourListNav
        changeShowing={changeShowing}
      />
        
      <YourListMain
        showingList={showingList}
      />
      <Footer />
    </>
  )

}

export default YourList
