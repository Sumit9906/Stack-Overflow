import React from 'react'
import '../../App.css'
// import useMediaQueries from 'media-queries-in-react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import './home.css'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'

const Home = () => {

  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <div className='home-container-2'>
        <HomeMainbar />
        <RightSidebar/>

      </div>
      
    </div>
  )
}

export default Home
