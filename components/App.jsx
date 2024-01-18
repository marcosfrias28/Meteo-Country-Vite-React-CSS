import { useState, useEffect } from 'react'
import axios from 'axios'
import Results from './Results'
import MeteoCountryLogo from '../assets/MeteoCountrylogo'

export default function App () {
  const [countryList, setCountryList] = useState([])
  const [filteredList, setFilteredList] = useState('')

  const handleChangeSearch = (event) => {
    const filteredCountries = countryList
      .filter((country) => country.name.common
        .toLowerCase()
        .includes(event.target.value.toLowerCase()))
      .map(country => {
        return {
          name: country.name.common,
          capital: country.capital,
          population: country.population,
          languages: country.languages ? Object.values(country.languages) : [],
          flagURl: country.flags.png,
          lat: country.latlng[0],
          lon: country.latlng[1]
        }
      })
    setFilteredList(filteredCountries)
  }

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountryList(response.data)
      }).catch(error => console.log('There is one error in the Promise', error))
  }, [])

  return (
    <section className='weather-app'>
      <div className='search-container'>
        <MeteoCountryLogo className='logo' />
        <div className='search-bar'>
          <div className='search'>
            <label htmlFor='search'>
              <svg xmlns='http://www.w3.org/2000/svg' height='24' fill='#f7f7f7' viewBox='0 -960 960 960' width='24'><path d='M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z' /></svg>
            </label>
            <input onChange={handleChangeSearch} type='text' id='search' />
          </div>
        </div>
      </div>
      <article className='text-search'>
        {filteredList !== '' ? <Results filteredList={filteredList} /> : <p> Make a research </p>}
      </article>
      <div />
    </section>
  )
}
