import React, { useState } from 'react'
// import '../styles/styl/main.styl'
import Calculator from './Calculator'
import MyComponent from './MyComponent'

function Main(props: any) {
  let [count, setCount] = useState(0)
  const btnTitle = 'Click me'
  const handleClick = () => {
    setCount(count + 1)
    console.log(count)
  }

  return (
    <>
      <Calculator />
      {/* <button className="btn" onClick={handleClick}>
        {btnTitle}
      </button>
      <p className="text">Clicked: {count} times</p>
      <MyComponent /> */}
    </>
  )
}
export default Main
