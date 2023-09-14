import React from 'react'
import menu from './images/Menu.png'
import find from './images/search.png'
import logo from './images/tv.png'
import propTypes from 'prop-types'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Searched from './Searched'

const Navbar = ({ clas }) => {
  const [content, setContent] = useState('')
  const [visible, setVisible] = useState(false) // Start with results hidden

  const handleInputChange = (e) => {
    const inputValue = e.target.value
    setContent(inputValue)
    // Show the results if the input has a value
    setVisible(inputValue.trim() !== '')
  }

  return (
    <div>
      <nav className={clas}>
        <Link to="/">
          <div className="logo">
            <img src={logo} alt="MovieBox Logo" />
            <b>MovieBox</b>
          </div>
        </Link>
        <div className="search">
          <form>
            <input
              type="text"
              value={content}
              placeholder="Enter something"
              onChange={handleInputChange}
            />
            <img src={find} alt="Search Icon" />
          </form>
          {visible ? <Searched con={content} /> : null}
        </div>
        <div className="login">
          <a>Sign In</a>
          <img src={menu} alt="Menu Icon" />
        </div>
      </nav>
    </div>
  )
}

export default Navbar

Navbar.propTypes = {
  clas: propTypes.string
}
