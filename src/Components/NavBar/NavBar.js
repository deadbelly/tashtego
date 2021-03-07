import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

export const NavBar = () => {
  const checkPath = path => {
    if (window.location.pathname.toString() === path) {
      return 'toggled'
    }
    return ''
  }

  return (
    <div className='navbar'>
      <Link to='/settings' >
        <button className={`navbtn ${checkPath('/settings')}`}>Settings</button>
      </Link>
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
