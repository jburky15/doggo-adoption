import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'


export const NavBar = () => {
  return (
    <>
      
      <div className='pageLinks'>
        <Link to="/" className='pageLink'>Home</Link>
        <Link to="/DogAdoptions" className='pageLink'>Dogs</Link>
        <Link to="/AdoptForm" className='pageLink'>Adoption Form</Link>
        <Link to="/Contact" className='pageLink'>Contact Us</Link>
      </div>
      <div className="hamburgerMenu">
          <h1>-</h1>
        </div>
        <div className="navHeader">
          <h1>Doggo Adoption Network</h1>
        </div>
    </>
  )
}
