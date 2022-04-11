import React from 'react'
// import { Link } from 'react-router-dom'
// import './navbar.css'
import './navbar.css'


export const Navbar = () => {
  return (
    <nav className="nav-heading">
    <a href="/"><h1 className="home-heading">QuickNote</h1></a>
    
    <div className="login-section">
        <a href="#" className="login">Login</a>

    </div>
</nav>
  )
}
