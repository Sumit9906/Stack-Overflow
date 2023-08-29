import './App.css';
import Routes1 from './Routes1';
import Navbar from './components/Navbar/Navbar';
import MNavbar from './components/MNavbar/MNavbar';
import { BrowserRouter as Router} from 'react-router-dom'
import { fetchAllQuestions } from './actions/question';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllUsers } from './actions/users'
//abc
// import { animateScroll } from 'react-scroll'

export default function App() {


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  }, [dispatch])

  return (
    <div id='container' className="App">
      <Router>
        <Navbar/>
        <MNavbar/>
        <Routes1/>
      </Router>
    </div>
  );
}
