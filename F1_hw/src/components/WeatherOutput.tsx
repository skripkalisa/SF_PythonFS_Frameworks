import React from 'react'
import useState from 'react-usestateref'

import '../styles/styl/weather-out.styl'
import WeatherGeneral from './WeatherGeneral'
import WeatherMinutely from './WeatherMinutely'
import WeatherHourly from './WeatherHourly'
import WeatherDaily from './WeatherDaily'

export default function WeatherOutput(props: any) {
  // console.log(props.queryRef.current)
  const [mode, setMode, modeRef] = useState('')
  const [data, setData, dataRef] = useState()
  const [response, setResponse, responseRef] = useState()
  function oneApiSearch() {
    fetch(
      props.api.oneCallUrl +
        'lat=' +
        props.queryRef.current.lat +
        '&lon=' +
        props.queryRef.current.lon +
        props.api.options +
        props.api.key
    )
      .then(response => response.json())
      .then(responseData => {
        setResponse(responseData)
        console.log('oneApiSearch', responseData)
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error)
      })
  }

  // oneApiSearch()
  function handleMode(e: any) {
    e.preventDefault()
    const mode = e.target.dataset.mode
    setMode(mode)
    if (responseRef.current)
      setData(responseRef.current[modeRef.current.toString()])
  }
  return (
    <>
      {props.queryRef.current.temp === '' ? (
        <div onLoad={oneApiSearch}>No city selected</div>
      ) : (
        <div onLoad={oneApiSearch}>
          <div className="mode-setters">
            <input
              type="button"
              className="set-mode"
              onClick={handleMode}
              data-mode="minutely"
              value="Minutely"
            />

            <input
              type="button"
              className="set-mode"
              onClick={handleMode}
              data-mode="hourly"
              value="Hourly"
            />

            <input
              type="button"
              className="set-mode"
              onClick={handleMode}
              data-mode="daily"
              value="Daily"
            />
          </div>
          {/* <h3 className="city">City: {props.queryRef.current.city}</h3> */}
          {modeRef.current === '' ? (
            <WeatherGeneral queryRef={props.queryRef} api={props.api} />
          ) : modeRef.current === 'daily' ? (
            <WeatherDaily dataRef={dataRef} api={props.api} />
          ) : modeRef.current === 'hourly' ? (
            <WeatherHourly dataRef={dataRef} api={props.api} />
          ) : (
            <WeatherMinutely
              current={responseRef.current}
              dataRef={dataRef}
              api={props.api}
            />
          )}
        </div>
      )}
    </>
  )
}
