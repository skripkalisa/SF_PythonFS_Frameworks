import React from 'react'

export default function WeatherDaily(props: any) {
  const daily = props.dataRef.current

  return (
    <>
      <h3>Weather Daily</h3>
      {daily.map((data: any) => (
        <div className="daily-wrapper" key={data.dt}>
          <div className="daily morn" key={data.sunrise}>
            <p className="temp">T:{data.temp.morn}°C</p>
            <p className="feels-like">Fl: {data.feels_like.morn}°C</p>
            <p className="wind">Wind: {data.wind_speed}m/s</p>
          </div>
          <div className="daily day" key={data.dt}>
            <p className="temp">T:{data.temp.day}°C</p>
            <p className="feels-like">Fl: {data.feels_like.day}°C</p>
            <p className="wind">Wind: {data.wind_speed}m/s</p>
          </div>
          <div className="daily eve" key={data.sunset}>
            <p className="temp">T:{data.temp.eve}°C</p>
            <p className="feels-like">Fl: {data.feels_like.eve}°C</p>
            <p className="wind">Wind: {data.wind_speed}m/s</p>
          </div>

          <div className="daily night" key={data.moonrise}>
            <p className="temp">T:{data.temp.night}°C</p>
            <p className="feels-like">Fl: {data.feels_like.night}°C</p>
            <p className="wind">Wind: {data.wind_speed}m/s</p>
          </div>

          <div key={data.weather[0].id}>
            <h4 className="weather-desc" key={data.weather[0].id}>
              Description: {data.weather[0].description}
            </h4>
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
