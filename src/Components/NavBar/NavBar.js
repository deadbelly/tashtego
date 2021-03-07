import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

export const NavBar = () => {
  const checkPath = path => {
    console.log(window.location.pathname)
    if (window.location.pathname.toString() === path) {
      return 'toggled'
    }
    return ''
  }

  return (
    <div className='navbar'>
      <button className='navbtn'>Options</button>
      <Link to='/' >
        <button className={`navbtn ${checkPath('/')}`}>Home</button>
      </Link>
      <Link to='/list' >
        <button className={`navbtn ${checkPath('/list')}`}>List</button>
      </Link>
      <Link to='/search' >
        <button className={`navbtn ${checkPath('/search')}`}>Search</button>
      </Link>
    </div>
  )
}
