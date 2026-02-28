import axios from 'axios'
import {useEffect, useState} from 'react'
function App() {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData= async () =>{
    // console.log('data aa gayaa');
    const res = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`)
    setUserData(res.data);
  }

  useEffect(()=>{
    getData()
  },[index])

  const prevBtn = () =>{
    if(index>1){
      setIndex(index-1)
      setUserData([])
    }
  }
  const nextBtn = ()=>{
    setIndex(index+1)
    setUserData([])
  }


  let printUserData = <h3 className='text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading page {index}</h3>

  if(userData.length>0){
    printUserData = userData.map((elem,idx)=>{
      return <div key={idx}>
        <a href={elem.url} target='_blank'>
          <div className='h-40 w-44 flex flex-wrap overflow-hidden rounded-xl'>
            <img 
              src={elem.download_url} 
              alt="images"
              className='h-full w-full object-cover'
            />
          </div>
          <h2 className='font-bold text-base'>{elem.author}</h2>
        </a>
      </div>
    })
  }
  return (
    <div className='bg-black overflow-auto h-screen p-7 gap-5 text-white'>
      {/* <h1 className='fixed text-6xl text-amber-400'>{index}</h1> */}
      <div className='flex flex-wrap gap-4 p-4 justify-center items-center'>
        {printUserData}
      </div>
      
      <div className='flex justify-center gap-6 items-center p-4'>
        <button className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold' 
        onClick={prevBtn} 
        disabled={index === 1}
        style={{opacity:index == 1?0.5:1}}
        >Prev</button>
        {index > 1 && <h1>{index - 1}</h1>}
        <h1 
        className='underline text-amber-400'
        >{index}</h1>
        <h1>{index+1}</h1>
        <button className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold' 
        onClick={nextBtn}
        >Next</button>
      </div>
    </div>
  )
}

export default App
