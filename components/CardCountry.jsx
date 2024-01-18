import WeatherCard from './WeatherCard'

export default function CardCountry ({ countries }) {
  return (
    <section id='cardcountry'>
      {countries && countries.map((country, index) => {
        const { name, capital, population, languages, flagURl } = country
        return (
          <div id='country-card' key={index}>
            <section id='country-description'>
              <h2 className='cardcountry-heading'>{name}</h2>
              <ul className='cardcountry-ul'>
                <li>
                  <strong>Capital:</strong> {capital}
                </li>
                <li>
                  <strong>Population:</strong> {population}
                </li>
              </ul>
            </section>
            <section id='country-languages'>
              <h2 className='cardcountry-heading'>Languages</h2>
              <ul className='cardcountry-ul'>
                {languages.map((language, index) => {
                  return (
                    <li key={index + 1000}><strong>{language}</strong></li>
                  )
                })}
              </ul>
            </section>
            <section id='country-flag'>
              <img src={flagURl} alt={name} className='flag' />
            </section>
          </div>
        )
      })}
      <WeatherCard countries={countries} />
    </section>
  )
}
