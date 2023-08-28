import React from 'react'
import { useLocation, useNavigate} from 'react-router-dom'
import './HomeMainbar.css'
import { useSelector } from 'react-redux'
// import Questions from './Questions'
import QuestionsList from '../HomeMainbar/QuestionsList'
// import { setCurrentUser } from '../../actions/currentUser'

  

const HomeMainbar = () => {
  // const dispatch = useDispatch()
  var User = useSelector((state) => (state.currentUserReducer))
  // useEffect(() => {
  //   dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
  // },[dispatch])

  const location = useLocation()
  const navigate = useNavigate()
  // const user = null

const questionsList = useSelector((state) => state.questionsReducer)
// console.log(questionsList)

  
  // var questionsList = [{
  //   _id: 1,
  //   upVotes: 3,
  //   downVotes: 2,
  //   noOfAnswers: 2,
  //   questionTitle: "What is a function?",
  //   questionBody: "It meant to be",
  //   questionTags: ["java","node.js","raectjs","mongodb"],
  //   userPosted: "mano",
  //   userId: 1,
  //   askedOn: "jan 1",
  //   answer: [{
  //     answerBody: "Answer",
  //     userAnswered: 'kumar',
  //     answeredOn: "jan 2",
  //     userId: 2
  //   }]
  // },{
  //   _id: 2,
  //   upVotes: 3,
  //   downVotes: 2,
  //   noOfAnswers: 0,
  //   questionTitle: "What is a function?",
  //   questionBody: "It meant to be",
  //   questionTags: ["javascript","R","python",],
  //   userPosted: "mano",
  //   askedOn: "jan 1",
  //   userId: 1,
  //   answer: [{
  //     answerBody: "Answer",
  //     userAnswered:'kumar',
  //     answeredOn:"jan 2",
  //     userId: 2
  //   }]
  // },{
  //   _id: 3,
  //   upVotes: 3,
  //   downVotes: 2,
  //   noOfAnswers: 2,
  //   questionTitle: "What is a function?",
  //   questionBody: "It meant to be",
  //   questionTags: ["javascript","R","python"],
  //   userPosted: "mano",
  //   askedOn: "jan 1",
  //   userId: 1,
  //   answer: [{
  //     answerBody: "Answer",
  //     userAnswered: 'kumar',
  //     answeredOn: "jan 2",
  //     userId: 2
  //   }]
  // }]

  

  const checkAuth = () =>{
      if(User === null){
          alert("Login or Signup to ask a question")
          navigate('/Auth')
      }
      else {
        navigate('/AskQuestion')
      }
  }
  return (
    <div className='main-bar' >
        <div className='main-bar-header'>
            {
              location.pathname === '/'? (<h1>Top Questions</h1>) : <h1>All Questions</h1>
            }
            <button onClick={checkAuth} className='ask-btn'> Ask Question</button>
        </div>
        <div className='noofques'>
          {
            questionsList.data === null? (
            <h1>Loading...</h1>) : (
            <>
              <p>{ questionsList.data.length } questions</p>
              <QuestionsList questionsList = { questionsList.data } />
            </>
          )}
        </div>
    </div>
  )
}

export default HomeMainbar