import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [data, setData] = useState([])

  // const getData= async ()=>{
  //   const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   .then(res=>res.json())
  //   .then(data=>
  //     setData(data))
  // }

  // const getData= async ()=>{
  //   const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  //   const data = await res.json()
  //   setData(data)
  // }

  // const getData = async () =>{
  //   const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(data);
  //   setData(data)
    
  // }

  const getData = async () =>{
    const res = await axios.get('https://picsum.photos/v2/list')
    setData(res.data)
  }

  return (
    <>
      <div>
        <button onClick={getData}>Get Data</button>

        <div className="parent">
          {data.map((item,idx) => (
            <div key={item.id}>
              <img
                src={item.download_url}
                alt="fetched images"
              />
              <h3>{item.author}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
