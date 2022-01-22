import React from 'react'
import useState from 'react-usestateref'
// import '../styles/styl/weather-m.styl'

export default function WeatherMinutely(props: any) {
  const minutely = props.dataRef.current
  const currently = props.current.current

  return (
    <>
      <h3>Weather Minutely</h3>
      <h2 className="temp">Temperature: {currently.temp}°C</h2>
      <h4 className="weather-desc">Feels like: {currently.feels_like}°C </h4>
      <h4 className="weather-desc">Wind: {currently.wind_speed}m/s</h4>
      <h4 className="weather-desc">
        Description: {currently.weather[0].description}
      </h4>
      <img
        src={props.api.iconurl + currently.weather[0].icon + '.png'}
        alt={currently.weather[0].description}
      />
      {minutely.map((data: any) => (
        <div className="minutely" key={data.dt}>
          <span className="time">
            Time: {new Date(data.dt * 1000).toLocaleTimeString()}{' '}
          </span>
          <span className="precipitation">
            Precipitation: {data.precipitation} mm
          </span>
        </div>
      ))}
    </>
  )
}
