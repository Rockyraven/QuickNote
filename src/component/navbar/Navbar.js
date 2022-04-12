import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'


export const Navbar = () => {
  return (
    <nav className="nav-heading">
    <Link to="/"><h1 className="home-heading">QuickNote</h1></Link>
    
    <div className="login-section">
        <Link to="/login" className="login">Login</Link>

    </div>
</nav>
  )
}
