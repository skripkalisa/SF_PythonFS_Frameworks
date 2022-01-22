import React from 'react'
import useState from 'react-usestateref'
import '../styles/styl/weather-in.styl'

export default function WeatherInput(props: any) {
  return (
    <>
      <form onSubmit={props.getInput} className="form_weather">
        <input
          type="input"
          // pattern="[A-Za-z]"
          className="form__input_weather"
          onChange={props.handler}
          placeholder="Enter City Name"
          value={props.queryRef.current.city}
        />
      </form>
    </>
  )
}
