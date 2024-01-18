import {
  Icon01d,
  Icon01n,
  Icon02d,
  Icon02n,
  Icon03d,
  Icon03n,
  Icon04d,
  Icon04n,
  Icon09d,
  Icon09n,
  Icon10d,
  Icon10n,
  Icon11d,
  Icon11n,
  Icon13d,
  Icon13n,
  Icon50d,
  Icon50n
} from '../assets/WeatherIcons'

const allIcons = {
  code01d: <Icon01d />,
  code01n: <Icon01n />,
  code02d: <Icon02d />,
  code02n: <Icon02n />,
  code03d: <Icon03d />,
  code03n: <Icon03n />,
  code04d: <Icon04d />,
  code04n: <Icon04n />,
  code09d: <Icon09d />,
  code09n: <Icon09n />,
  code10d: <Icon10d />,
  code10n: <Icon10n />,
  code11d: <Icon11d />,
  code11n: <Icon11n />,
  code13d: <Icon13d />,
  code13n: <Icon13n />,
  code50d: <Icon50d />,
  code50n: <Icon50n />
}

export const WeatherIcon = ({ iconCode }) => {
  const iconSVG = allIcons[`code${iconCode}`]
  return (
    <div style={{ width: '200px', height: '200px', objectFit: 'contain' }}>{iconSVG}</div>
  )
}

export default allIcons
