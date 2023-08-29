import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import QuestionsDetails from './QuestionsDetails'
// import { animateScroll, animateScroll as scroll } from 'react-scroll';
// import { duration } from 'moment';
const DisplayQuestion = () => {

  // useEffect(() => {
  //   scroll.scrollToBottom({
  //     containerId: "home-container-2",
  //     duration: 2000,
  //     smooth: true
  //   });
  // }, []);

  return (
    <div className='home-container-1'>
        <LeftSidebar />
        <div  className='home-container-2'>
            <QuestionsDetails />
            <RightSidebar/>

        </div>
    </div>
  )
}

export default DisplayQuestion
