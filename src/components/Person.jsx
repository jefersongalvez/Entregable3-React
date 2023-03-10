import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './styles/person.css'

const Person = ({ resident }) => {
    const [person, setPerson] = useState()


    useEffect(() => {
        axios.get(resident)
            .then(res => setPerson(res.data))
            .catch(err => console.log(err))

    }, [])
    console.log(person)
    return (
        <>
            <div className='card'>
                <header className='card__header'>
                    <img className='card__img' src={person?.image} />

                    <div className='card__container'>
                        <span className={`card__circle ${person?.status}`}></span>
                        <span className='card__status' >{person?.status}</span>
                    </div>

                </header>
                <section className='section'>
                    <h2 className='section__name'>{person?.name}</h2>
                    <ul className='list'>
                        <li className='item'><b>Raza: </b>{person?.species}</li>
                        <li className='item'><b> Origen:</b>{person?.origin.name}</li>
                        <li className='item'><b>Episodios: </b>{person?.episode.length}</li>
                    </ul>
                </section>


            </div>
        </>
    )
}

export default Person