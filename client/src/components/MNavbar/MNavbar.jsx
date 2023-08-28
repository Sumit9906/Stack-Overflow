import React, {useEffect, useState} from 'react'
import { Link, useNavigate,NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import decode from 'jwt-decode'
// import icon from '../../assets/icon.png'
import Globe from '../../assets/Globe.svg'
// import search from '../../assets/search-solid.svg'
// import Avatar from '../../components/Avatar/Avatar'
import './MNavbar.css'
import { setCurrentUser } from '../../actions/currentUser'
import {FaBars} from 'react-icons/fa'

const MNavbar = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    var User = useSelector((state) => (state.currentUserReducer))

    const [sidebarOpen, setSideOpen] = useState(false);
//eslint-disable-next-line
    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' })
        navigate('/')
        dispatch(setCurrentUser(null))
    }

    useEffect(() => {
        const token = User?.token
        if(token){
            const decodedToken = decode(token)
            if(decodedToken.exp * 1000 < new Date().getTime()){
                handleLogout()
            }
        }
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    },[dispatch, User?.token, handleLogout])

    const toggleSidebar = () =>  {
        setSideOpen(!sidebarOpen);
    }

  return (
    <div className="mainnav">
        <div className='sidebarr'>
            <div className="bars">
                <FaBars onClick={toggleSidebar}/>
            </div>
            <nav className='navb' style={{display: sidebarOpen ? 'flex' : 'none' , flexDirection: sidebarOpen? 'column' : 'none' }}>
                <NavLink to ='/' className='nav-link' Name='' >
                    <p >Home</p>
                </NavLink>
                <div className=''>
                    <div><p>PUBLIC</p></div>
                    <NavLink to='/Questions' className='nav-link'>
                        <img src={Globe} alt="Globe" />
                        <p style={{paddingLeft:"10px"}}>Questions</p>
                    </NavLink>
                    <NavLink to='/Tags' className='nav-link' Name='' style={{paddingLeft:'40px'}}>
                        <p>Tags</p>
                    </NavLink>
                    <NavLink to='/Users' className='nav-link' Name='' style={{paddingLeft:'40px'}}>
                        <p>Users</p>
                    </NavLink>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default MNavbar
