import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black rounded-l rounded-r'>Tailwind test</h1>
      <br></br>
      <Card username="Harshil" btnText="click here"/>
      <Card username="XYZ" btnText="visit here"/>
      <Card username="XYZ"/>

      
    </>
  )
}

export default App
