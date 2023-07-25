import { DogCard } from '../../components/DogCard/DogCard';
import { dogs } from '../../data/dogs';
import React from 'react'
import './DogAdoption.css'

const DogAdoptions = () => {
  return (
    <>
      <h1 className='adoptionHeader'>Doggie Adoptions</h1>
        <div className="dog-container">
        {dogs.map((dog, index) => (
          <DogCard key={index} {...dog} />
        ))}
      </div>
    </>
  )
}

export default DogAdoptions