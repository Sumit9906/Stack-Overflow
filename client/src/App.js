import './App.css';
import Routes1 from './Routes1';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router} from 'react-router-dom'
import { fetchAllQuestions } from './actions/question';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllUsers } from './actions/users'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  }, [dispatch])

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes1/>
      </Router>
    </div>
  );
}

export default App;
