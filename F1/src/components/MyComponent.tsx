import React, { useEffect } from 'react'
import useState from 'react-usestateref' // see this line
function MyComponent() {
  var [counter, setCounter, counterRef] = useState(0)
  function increment() {
    setCounter(counter + 1)
    console.log(counterRef.current) // will show 1
  }
  // useEffect(() => {
  //   console.log(counterRef.current) // Always show the last value
  //   return () => {
  //     console.log(counterRef.current) // Always show the last value
  //   }
  // }, [])
  return (
    <div>
      Current number: {counter}
      <button onClick={increment}>Increment</button>
    </div>
  )
}
export default MyComponent
