import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './assets/profile.png'
import Logo from './assets/logoo.png'

import Card from './components/Card'

function App() {


  return (
    <>
      <div className="parent">
        <Card user='Harshil Mayani' age={20} img={Profile}/>
        <Card user='abc xyz' age={22} img={Logo}/>
        <Card user='def ghi' age={23} img="https://images.unsplash.com/photo-1769117438397-ba08341b7d60?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      </div>
    </>
  )
}

export default App
