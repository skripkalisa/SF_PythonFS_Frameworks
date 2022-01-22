import React, { useEffect } from 'react'
import useState from 'react-usestateref'
// import '../styles/styl/weather.styl'
import WeatherInput from './WeatherInput'
import WeatherOutput from './WeatherOutput'

export default function Weather() {
  const initialState = {
    city: '',
    temp: '',
    feels_like: '',
    min: '',
    max: '',
    description: '',
    icon: '',
    wind: '',
    lat: '',
    lon: '',
  }

  const [query, setQuery, queryRef] = useState(initialState)
  const api = {
    key: process.env.REACT_APP_WEATHER_API_KEY,
    baseurl: 'https://api.openweathermap.org/data/2.5/weather?q=',
    oneCallUrl: 'https://api.openweathermap.org/data/2.5/onecall?',
    options: '&units=metric&lang=en&APPID=',
    iconurl: 'http://openweathermap.org/img/w/',
  }

  const updateQuery = (responseData: any) => {
    setQuery({
      ...queryRef.current,
      temp: responseData.main.temp,
      feels_like: responseData.main.feels_like,
      min: responseData.main.temp_min,
      max: responseData.main.temp_max,
      description: responseData.weather[0].description,
      icon: responseData.weather[0].icon,
      wind: responseData.wind.speed,
      lat: responseData.coord.lat,
      lon: responseData.coord.lon,
    })
  }
  const basicSearch = () => {
    fetch(api.baseurl + queryRef.current.city + api.options + api.key)
      .then(response => response.json())
      .then(responseData => {
        updateQuery(responseData)
        console.log(responseData)
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error)
      })
  }
  function getCookie() {
    const cookie = document.cookie

    let city = cookie
      ?.split('; ')
      ?.find(row => row.startsWith('city='))
      ?.split('=')[1]
    console.log(city)
    return city
  }
  function setCookie(city: string) {
    document.cookie = `city=${city}; SameSite=Lax; Secure`
  }

  function setCity() {
    const city = getCookie()
    if (city !== undefined) setQuery({ ...queryRef.current, city: city })
  }

  useEffect(() => {
    setCity()
    return basicSearch()
  }, [])

  const handleInput = (e: any) => {
    const input = e.target.value
    const regex = /[^a-zA-Zа-яА-Я- ]+/g
    const city = input.replace(regex, '')
    if (city !== '') {
      setQuery({ ...queryRef.current, city: city })
      setCookie(queryRef.current.city)
    }
  }

  const getInput = (e: any) => {
    e.preventDefault()

    basicSearch()
  }
  return (
    <>
      <div className="weather-app">
        <h1>Weather</h1>
        {/* <button className="btn" onClick={basicSearch}>
          click me
        </button> */}
        <WeatherInput
          handler={handleInput}
          queryRef={queryRef}
          getInput={getInput}
        />

        <WeatherOutput queryRef={queryRef} api={api} />
      </div>
    </>
  )
}
