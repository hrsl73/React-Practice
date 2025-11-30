import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {


  let [counter, setCounter] = useState(0)
  // let counter = 0

  let increaseValue = () =>{
    counter = counter +1
    console.log("value increased!")
    setCounter(counter)
  }

  let decreaseValue = () =>{
    counter = counter -1
    console.log("value decreased!")
    setCounter(counter)
  }

  let resetValue = () =>{
    counter = 0
    console.log("value reset!")
    setCounter(counter)
  }
  

  return (
   <>
    <h1>Hello everyone..</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={increaseValue}>increase value</button>
    <button onClick={decreaseValue}>decrease value</button>
    <button onClick={resetValue}>reset value</button>
   </>
  )
}

export default App
