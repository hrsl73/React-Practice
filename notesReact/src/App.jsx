import { useState } from 'react'

const App = () => {
  const [heading,setHeading] = useState('')
  const [details,setDetails] = useState('')

  const [task,setTask] = useState([])
  
  const handleSubmit=(e)=>{

    const copyTask=[...task]
    copyTask.push({heading,details})
    setTask(copyTask)
    setHeading('')
    setDetails('')
  }

  const deleteNote=(idx)=>{;
    const copyTask = [...task]
    copyTask.splice(idx,1)
    setTask(copyTask)
  }

  return (
    <div className='h-screen  lg:flex bg-black text-white '>
        <form 
        onSubmit={(e)=>{
          e.preventDefault()
          handleSubmit()
        }}
        className='flex gap-3 p-10 lg:w-1/2 flex-col items-start '>
          <h1 className='text-4xl font-bold'>Add Notes</h1>

          <input 
            type="text" 
            placeholder='Enter Notes Heading'
            className='px-5 font-medium w-full py-2 border-2 outline-none rounded'
            value={heading}
            onChange={(e)=>{
                setHeading(e.target.value)
            }}  
          />
          <textarea 
            placeholder="enter details" 
            type="text"
            className='px-5 w-full font-medium h-32 py-2 border-2 outline-none rounded'
            value={details}
            onChange={(e)=>{
                setDetails(e.target.value)
            }}
          ></textarea>
          <button
          className='bg-white w-full font-medium text-black px-5 py-2 outline-none rounded border-2 active:scale-90'

          >Add Notes</button>

        </form>
        <div className=' lg:w-1/2 lg:border-l-2 flex-wrap p-10'>
          <h1 className='text-4xl font-bold'>Recent Notes</h1>

          <div className='flex flex-wrap items-start justify-start gap-5 h-[90%] overflow-auto mt-5'>
            {task.map((ele,idx)=>{
              
              return <div key={idx} className='flex justify-between pb-6 flex-col items-start relative h-52 w-40 rounded-xl py-8 px-4 pl-6 bg-[url("https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png")] bg-cover text-black '>
                
                <div>
                  <h3 className='leading-tight  font-bold text-xl'>{ele.heading}</h3>
                  <p className='mt-2 leading-tight text-xs  font-semibold text-gray-600'>{ele.details}</p>
                </div>
                  <button 
                  onClick={()=>{
                    deleteNote(idx)
                  }}
                  className='w-full bg-red-400 hover:bg-red-700 cursor-pointer active:scale-80 text-white py-1 text-xs rounded-xl font-bold'>delete</button>
              </div>
            })}
          </div>

        </div>
    </div>
  )
}

export default App
