import React from 'react'
import "./dogcard.css"
import { AdoptButton } from '../adoptButton/AdoptButton';

export const DogCard = ({ name, breed, age, description, image }) => {
    const year = age < 2 ? 'Year' : 'Years';

    return (
        <div className="dog-card">
            <img src={image} alt={name} />
            <h3>{name} • {age} {year} Old</h3>
            <p className='dogBreed'>{breed}</p>
            <p className='dogDescription'>{description}</p>
            <AdoptButton />
        </div>
    )
}
