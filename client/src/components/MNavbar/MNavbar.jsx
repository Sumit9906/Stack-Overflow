import React, { useState} from 'react'
import {  Link, useNavigate,NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// import decode from 'jwt-decode'
import icon from '../../assets/icon.png'
import Globe from '../../assets/Globe.svg'
import search from '../../assets/search-solid.svg'
import Avatar from '../../components/Avatar/Avatar'
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
        <div className="mainnav2">
            <div className='navbarr'>
                <div className="scale1">
                    <Link to='/' className='logo'>
                        <img src={icon} alt="logo" />
                    </Link>
                    <Link to='/' className='naitm nabtn'>Products</Link>
                </div>
                <div className="scale2">
                    <img src={search} alt="search" className='search'/>
                    { User === null ?
                    <Link to='/Auth' className='nalink naitm'>Log in</Link> :
                    <>
                        <Link to={`/Users/${User.result._id}`} style= { {color: "white" , textDecoration: 'none' }} ><Avatar backgroundColor='#009dff' px='15px' py='9px' borderRadius="50%" color='white'>{User.result.name.charAt(0).toUpperCase()}</Avatar></Link>
                        <button className='nalink naitm' onClick={handleLogout} >Log out</button>
                    </>
                }
                {
                    User === null ? 
                    <Link to='/Auth' className='nalink naitm'>Sign Up</Link> : 
                    <>
                    </> 
                }
                </div>
            </div>
        </div>
    </div>
  )
}

export default MNavbar
