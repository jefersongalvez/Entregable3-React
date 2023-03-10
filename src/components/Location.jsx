import React from 'react'
import './styles/location.css'

const Location = ({ local }) => {
    console.log(local)
    return (
        <div className='location'>
            <h1 className='location__title'><b>Name: </b>{local?.name}</h1>

            <ul className='location__list'>
                <li className='location__item'><b>Tyoe: </b>{local?.type}</li>
                <li className='location__item'><b>Dimension: </b>{local?.dimension}</li>
                <li className='location__item'><b>Residents: </b>{local?.residents.length}</li>
            </ul>

        </div>
    )
}

export default Location