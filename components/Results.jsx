import { useEffect, useState } from 'react'
import CardCountry from './CardCountry'

export default function Results ({ filteredList }) {
  //
  // Destrutturazione della lista di paesi e Selezione delle proprieta' desiderate
  const [countries, setCountries] = useState(filteredList)

  useEffect(() => {
    setCountries(filteredList)
  }, [filteredList])

  const handleClickShow = (country) => {
    setCountries(country)
  }

  if (countries.length > 25) {
    return (
      <p>
        Too many results. Could you be more specific?
      </p>
    )
  } else if (countries.length > 1) { // Da 2 a 19 risultati costruisce una lista di n elementi
    return (
      <ul>
        {countries.map((country, index) => {
          return (
            <li key={index + 2000}>
              <button onClick={() => handleClickShow([country])}>{country.name}</button>
            </li>
          )
        })}
      </ul>
    )
  } else if (countries.length === 1) { // Una volta trovato 1 risultato costruisce le specifiche del paese ricercato
    return (
      <CardCountry countries={countries} />
    )
  }
}
