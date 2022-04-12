import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

export const Footer = () => {
    return (
        <footer className='footer-container'>
            <p>Made with ❤️ by Rocky</p>
            <p>Copyright &copy; 2022 Quick-Quiz, INC. All Right Reserved</p>
            <div className="social-link-container">

            <Link to="https://www.linkedin.com/in/rocky-abb69921b/"><i class="fa fa-linkedin"></i></Link>
            <Link to="https://twitter.com/ImRocky7277" target="_blank"><i className="fa fa-twitter"></i></Link> 
            <Link to="https://github.com/Rockyraven"><i class="social-icon fa fa-github"> </i></Link>

            </div>

        </footer>
    )
}
