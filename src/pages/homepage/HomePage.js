import React from 'react'
import img from '../../assets/img.svg'
import './homepage.css'
import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
      <div className="note-container">
          <div className="note-wrapper">
              <div className="img-box">
                  <img src={img} alt="" srcset="" />
              </div>
              <div className="description-box">
                  <p className='heading'>
                      QUICKNOTES
                  </p>
                  <p className=''>Welcome To Advance Notes Taking</p>
                  <p>Here Your data is Secure</p>
                  <div className="explore-button">

                  <a href="/NotePage" className='note-button '>Explore More <i className='fa fa-arrow-right'></i></a>
                  </div>
              </div>
          </div>
      </div>
  )
}
