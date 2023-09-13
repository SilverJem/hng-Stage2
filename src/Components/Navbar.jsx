import React from 'react'
import menu from './images/Menu.png'
import find from './images/search.png'
import logo from './images/tv.png'
import  propTypes  from 'prop-types'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = ({clas})=> {
  const [content, setContent] = useState("")

  return (
    <div>
       <nav className={clas}>
        <Link to="/">
    <div className="logo">
        <img src={logo}/>
       <b>MovieBox</b> 
    </div>
    </Link>
    <div className="search">
   <form>
      <input
        type="text"
        placeholder="Enter something"
        onChange={(e)=>setContent(e.target.value)}
      />
            <Link to={`/search/${content}`}><img src={find}/></Link>
      </form>
    </div>
    <div className="login">
        <a>Sign In</a>
        <img src={menu}/>
    </div>
</nav> 
    </div>
  )
}

export default Navbar
Navbar.propTypes ={
    clas:propTypes.string
}