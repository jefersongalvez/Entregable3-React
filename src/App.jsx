
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Location from './components/Location'
import Person from './components/Person'

function App() {

  const number = Math.ceil(Math.random() * 126)

  const [local, setLocal] = useState()
  const [inputvalue, setInputvalue] = useState(number)
  const [error, setError] = useState(false)
  const [loc, setLoc] = useState()

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/location/${inputvalue}`
    axios.get(url)
      .then(res => {
        setLocal(res.data)
        setError(false)
      })
      .catch(err => {
        setError(true)
      })

  }, [inputvalue])

  const handlesubmit = e => {
    e.preventDefault()
    if (e.target.inputvalue.value.length === 0) {
      setInputvalue(number)
    }
    else {
      setInputvalue(e.target.inputvalue.value)
    }

  }
  const handlechange = e => {
    const url = `https://rickandmortyapi.com/api/location/?name=${e.target.value.trim()}`
    axios.get(url)
      .then(res => setLoc(res.data.results))
      .catch(err => console.log(err))
  }


  return (
    <div className="App">
      <h1 className='title'>Ricky and Morty</h1>
      <form className="form" onSubmit={handlesubmit}>
        <input onChange={handlechange} className="form__input" id="inputvalue" type="text" />
        <button className="form__btn" >search</button>

      </form>
      <ul>
        {
          loc?.map(loc => (
            <li className='listchange' onClick={() => setInputvalue(loc.id)} key={loc.id}>{loc.name}</li>
          ))
        }
      </ul>
      {error ?

        <article className='error'>
          <h1 className='error__title'>"ERROR DE INPUT"</h1>
          <h3 className='error__subtitle'>"Tiene que cumplir uno de los siguientes requisitos sino no podra ubicar la localizacion"</h3>
          <ul className='error__list'>
            <li className='error__item'>"Se tiene que colocar un numero de 1 al 126"</li>
            <li className='error__item'>"Escoger una sugerencia del listado"</li>

          </ul>
        </article>

        :
        <header>
          <Location local={local} />
          <div className='resident'>
            {local?.residents.map(resident => (
              <Person key={resident} resident={resident} />
            ))


            }
          </div>
        </header>
      }


    </div >
  )
}

export default App
