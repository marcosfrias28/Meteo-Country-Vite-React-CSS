import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './styles/style.css'
import './styles/weathercard.css'
import './styles/cardcountry.css'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
