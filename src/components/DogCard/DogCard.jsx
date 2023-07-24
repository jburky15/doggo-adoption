import React from 'react'
import "./dogcard.css"

export const DogCard = ({ name, breed, age, description, image }) => {
    const year = age < 2 ? 'year' : 'years';

    return (
        <div className="dog-card">
            <img src={image} alt={name} />
            <h3>{name} • {age} {year} old</h3>
            <p className='dogBreed'>{breed}</p>
            <p className='dogDescription'>{description}</p>
        </div>
    )
}
