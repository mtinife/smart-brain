import React from 'react'
import './Navigation.css'

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav className="navbar" >
        <a href="/signout" onClick={() => onRouteChange('signout')} className='navbar-link'>Sign Out</a>
      </nav>
    )
  } else {
    return (
      <nav className="navbar" >
        <a href="/register" onClick={() => onRouteChange('register')} className='navbar-link'>Register</a>
        <a href="/signin" onClick={() => onRouteChange('signin')} className='navbar-link buttonStyle'>Sign In</a>
      </nav>
    )
  }
}

export default Navigation
