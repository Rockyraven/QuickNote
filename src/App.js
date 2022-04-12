import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import { Footer, Navbar } from './component'
import { HomePage } from './pages'

export const App = () => {
  return (<>
  <Navbar/>
    <Routes> 
        <Route path='/' element = {<HomePage/>}/>
     </Routes>  
    <Footer/>     
  </>
  )
}
