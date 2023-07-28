import React from 'react'
import './Home.css'
import underConstruction from '../../images/under-construction.webp'

const Home = () => {
  return (
    <>
      <div>
      <img src={ underConstruction } alt="" className='underConstruction' />
        <div className='mainContent'>
          <h1>This is the Home Page For Doggo Adoption Network!</h1>
          <p>Please pardon our dust, we are currently under construction!</p>
        </div>
      </div>
    </>
  )
}

export default Home;