import React from 'react'
import menu from './images/Menu.png'
import find from './images/search.png'
import logo from './images/tv.png'
import  propTypes  from 'prop-types'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = ({clas})=> {
  const [content, setContent] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (content) {
      window.location.href = `/search/${content}`;
    }
  };

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
   <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={content}
        placeholder="Enter something"
        onChange={(e)=>setContent(e.target.value)}
      />
    
            <img src={find}/>
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
