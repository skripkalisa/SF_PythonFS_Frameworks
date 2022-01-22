import React from 'react'
import useState from 'react-usestateref'
// import '../styles/styl/weather-h.styl'

export default function WeatherHourly(props: any) {
  console.log('WeatherHourly', props)
  const hourly = props.dataRef.current

  return (
    <>
      <h3>Weather Hourly</h3>
      {hourly.map((data: any) => (
        <div key={data.dt}>
          <h4>At {new Date(data.dt * 1000).toLocaleTimeString()}</h4>
          <h2 className="temp">Temperature: {data.temp}°C</h2>
          <h4 className="weather-desc">Feels like: {data.feels_like}°C </h4>
          <h4 className="weather-desc">Wind: {data.wind_speed}m/s</h4>
          <h4 className="weather-desc">
            Description: {data.weather[0].description}
          </h4>
          <div>
            <img
              src={props.api.iconurl + data.weather[0].icon + '.png'}
              alt={data.weather[0].description}
            />
          </div>
        </div>
      ))}
    </>
  )
}
