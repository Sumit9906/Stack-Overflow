import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import Questions from './pages/Questions/Questions'
import AskQuestion from './pages/AskQuestion/AskQuestion'
import DisplayQuestion from './pages/Questions/DisplayQuestion'
import Tags from './pages/Tags/Tags'
import Users from './pages/Users/Users'
import UserProfile from './pages/UserProfile/UserProfile'

const Routes1 = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Auth' element={<Auth/>}/>
      <Route path='/Questions' element={<Questions/>}/>
      <Route path='/AskQuestion' element={<AskQuestion/>}></Route>
      <Route path='/Questions/:id' element={<DisplayQuestion/>}></Route>
      <Route path='/Tags' element= {<Tags />} ></Route>
      <Route path='/Users' element={<Users />} />
      <Route path='/Users/:id' element={<UserProfile/>}/>
    </Routes>
  )
}

export default Routes1
