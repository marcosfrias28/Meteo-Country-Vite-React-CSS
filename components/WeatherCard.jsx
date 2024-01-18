import axios from 'axios'
import { useEffect, useState } from 'react'
import { WeatherIcon } from './SelectIcon'

const apiKeyWheater = import.meta.env.VITE_API_KEY

export default function WeatherCard ({ countries }) {
  const [weather, setWeather] = useState([])
  const capital = countries[0].capital.join('')
  const ENDPOINT_WEATHER = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apiKeyWheater}`

  useEffect(() => {
    axios
      .get(ENDPOINT_WEATHER)
      .then(response => {
        console.log(response.data.weather)
        setWeather(response.data.weather)
      }).catch(error => console.log('There is one error in the Promise', error))
  }, [])

  return (
    <section>
      {weather && weather.map((item) => {
        const { id, main, description, icon } = item
        return (
          <div className='weather-card' key={id}>
            <h2 className='cardcountry-heading'>the weather in {capital} is {main}</h2>
            <WeatherIcon className='weather-icon' iconCode={icon} />
            <p>{description}</p>
          </div>
        )
      })}

    </section>
  )
}
