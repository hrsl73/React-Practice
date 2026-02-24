import { useState } from 'react'
import reactLogo from './assets/react.svg'
import profileLogo from './assets/profile.png'
import Navbar from './Navbar.jsx'
import Contact from "./Contact";
import About from './About.jsx'
import { Routes,Route } from "react-router-dom"
import './App.css'

function Header(){
  return(
    <>
      <header className="flex items-center justify-between px-8 py-4 bg-gray-900 text-white shadow-md rounded-lg mb-1">
        <div className="flex items-center gap-3" >
          <img src={reactLogo} alt="react logo" className="w-15 h-15 ml-7"></img>
          <h1 className="text-xl font-semibold">React</h1>
        </div>
        <Navbar/>
      </header>
    </>
  )
}

function MainContent(){
  return(
    <>
      <div className="border-3 rounded-lg p-3 bg-gray-300 shadow-md">
        <h1 className="flex text-3xl font-bold m-7">Home Page </h1>
        <p className="text-sm ml-7 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, eum officia! Earum assumenda fugit harum itaque natus voluptatum exercitationem quos alias cumque dolor quod nisi doloribus eos consectetur modi, dolores odio, molestiae iste ipsa dolorum. Facere voluptates cumque debitis maiores aliquam autem? Odio dolore doloremque aspernatur fugit fuga cupiditate inventore, esse iure dolorum praesentium officia excepturi natus temporibus corrupti optio libero, obcaecati, laboriosam tempora molestiae quas. Doloribus officia quam placeat impedit numquam dolore! Eaque adipisci autem culpa! Asperiores quae animi libero consequuntur harum voluptas, nihil nobis, dolorum minus at soluta est et reprehenderit in magnam voluptatem eius. Molestias, laborum dolores.</p>
        <div className="flex justify-center">
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </>
  )
}

function Card(){
  return(
            <div className="flex items-center border-2 bg-gray-400 shadow-md rounded-lg m-7">
              <img src={profileLogo} className="w-50 h-50 m-5 rounded-full"></img>
              <div className="p-3">
                <h1 className="text-xl font-bold ">Harshil Mayani</h1>
                <h2 className="text-sm font-semibold">Lorem ipsum dolor sit amet.</h2>
                <p className="text-sm">Lorem, ipsum dolor.</p>
              </div>
            </div>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 mt-10">
      © {new Date().getFullYear()} Harshil Mayani
    </footer>
  );
}

function App() {

  return (
    <>
      <Header/>
      {/* <MainContent/> */}

      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
