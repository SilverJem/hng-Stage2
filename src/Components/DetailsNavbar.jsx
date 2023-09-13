import React from 'react'
import { Link } from 'react-router-dom'
import logo from './images/tv.png'
import home from './images/Home.png'
import movies from './images/Movie Projector.png'
import tv from './images/TV Show.png'
import calendar from './images/Calendar.png'
import logout from'./images/Logout.png'
const DetailsNavbar = () => {
  return (
    <div className='navbar'>
      <Link to='/' style={{textDecoration:"none"}}>
    <div className="logo">
        <img src={logo}/>
       <b>MovieBox</b> 
    </div>
    </Link>
     <Link to="/" style={{textDecoration:"none"}}>
    <div className="">
        <img src={home}/>
       <b>Home</b> 
    </div>
    </Link>
    <Link to="/" style={{textDecoration:"none"}}>
    <div className="active">
        <img src={movies}/>
       <b className='active'><span>Movies</span></b> 
    </div>
    </Link>
    <Link to="/" style={{textDecoration:"none"}}>
    <div className="logo">
        <img src={tv}/>
       <b>TV Series</b> 
    </div>
    </Link>
    <Link to="/" style={{textDecoration:"none"}}>
    <div className="logo">
        <img src={calendar}/>
       <b>Upcoming</b> 
    </div>
    </Link>
    <Link to="/" style={{textDecoration:"none"}}>
    <div className="logo">
        <img src={logout}/>
       <b>Logout</b> 
    </div>
    </Link>
    </div>
  )
}

export default DetailsNavbar
