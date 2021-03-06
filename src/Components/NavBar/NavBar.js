import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

export const NavBar = () => {
  return (
    <div className='navbar'>
      <button className='navbtn'>Options</button>
      <Link to='/' >
        <button className='navbtn'>Home</button>
      </Link>
      <Link to='/search' >
        <button className='navbtn'>Search</button>
      </Link>
    </div>
  )
}
