import {useState, useCallback, useEffect, useRef } from 'react'

function App() {

const [length,setLength] = useState(8)
const [numbersAllowed, setNumbersAllowed ] = useState(false)
const [charsAllowed, setCharsAllowed] = useState(false)
const [password, setPassword] = useState("")
const [text,setText] = useState("")

// useRef hook
const passwordRef = useRef(null)

function confirmationText (){

    setText("password copied successfully")
    console.log("haha")
}

const passWordGenerator = useCallback(()=>{
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numbersAllowed) str += "1234567890"
  if(charsAllowed) str += "!@#$%^&*()[];',./{}|:<?"



  for(let i=1 ;i <= length;i++){
      let char = Math.floor(Math.random() *str.length +1)
      pass += str.charAt(char)

  }
  setPassword(pass)


},[length,numbersAllowed,charsAllowed,setPassword])

const copyPasswordToClipboard = useCallback(()=>{
  passwordRef.current?.select()
  window.navigator.clipboard.writeText(password)
  confirmationText()
},[password])

useEffect(()=>{
  passWordGenerator()
},[length,numbersAllowed,charsAllowed,passWordGenerator])

  return (
    <>
      {/* <h1 className="text-center text-4xl text-white">Password Generator</h1> */}
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orage-500 bg-gray-800">
        <h1 className="text-white text-center">Password Generator</h1>
        <div className = "flex shadow rounded-lg overflow-hidden mb-4">
          <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 bg-white"
          placeholder="Password"
          readOnly
          ref={passwordRef}
          >
          </input>
          <button className="outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0 cursor-pointer hover:bg-blue-800 
                            active:scale-95 active:shadow-inner transition duration-150 ease-in-out"
          onClick={copyPasswordToClipboard}
          >
            Copy
          </button>

        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input 
            type="range" 
            min={6}
            max={30}
            value={length}
            className="cursor-pointer accent-orange-300"
            onChange={(e)=>{setLength(e.target.value)}}
            >
            </input>
            <label className="text-orange-300">Length:{length}</label>
          </div>

            <div className="flex items-center gap-x-1">
              <input 
              type="checkbox"
              defaultChecked={numbersAllowed}
              id="numberInput"
              onChange={()=>{
                setNumbersAllowed((prev)=> !prev)
              }}
              >
              </input>
              <label htmlFor="numberInput" className="text-orange-300 cursor-pointer">Numbers</label>
            </div>

            <div className="flex items-center gap-x-1">
              <input 
              type="checkbox"
              defaultChecked={charsAllowed}
              id="characterInput"
              onChange={()=>{
                setCharsAllowed((prev)=> !prev)
              }}
              >
              </input>
              <label htmlFor="characterInput" className="text-orange-300 cursor-pointer">Characters</label>
            </div>



        </div>
            <h4 className="text-center w-100 h-13 text-2xl py-2 my-3 bg-blue-600">{text}</h4>
      </div>
    </>
  )
}

export default App
