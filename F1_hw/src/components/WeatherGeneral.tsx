import React from 'react'
import useState from 'react-usestateref'
// import '../styles/styl/weather-gen.styl'

export default function WeatherGeneral(props: any) {
  const currently = props.queryRef.current

  return (
    <>
      <div className="general-wrapper">
        <div className="weather-desc">
          <div className="weather-city">{currently.city}</div>
          <img
            className="weather-img"
            src={props.api.iconurl + currently.icon + '.png'}
            alt={currently.description}
          />
          <div className="desc">{currently.description}</div>
          <div className="feels-like">{currently.feels_like}°C</div>
        </div>
        <div className="weather-temp">
          <div className="temp">{currently.temp}°C</div>
          <div className="min-max">
            {currently.min}°C/{currently.max}°C
          </div>
          <div className="wind">Wind: {currently.wind}m/s</div>
        </div>
      </div>
    </>
  )
}
