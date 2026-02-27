import './App.css'

function App() {

  const user ={
    name:'harshil',
    age:20,
    city:'palitana'
  }


  // set data in localStorage

  localStorage.setItem('user','harshil')
  localStorage.setItem('age','20')
  localStorage.setItem('city','palitana')

  //get data from localStorage

  console.log(localStorage.getItem('user'))
  console.log(localStorage.getItem('age'))
  console.log(localStorage.getItem('city'))

  // set data in localStorage(object)

  localStorage.setItem('userobj',JSON.stringify(user))

  // get data from localStorage(object)

  const userData = JSON.parse(localStorage.getItem('userobj'))
  console.log(userData.name)
  console.log(userData.age)
  console.log(userData.city)

  // to remove from localStorage

  localStorage.removeItem('user')

  //to clear localStorage

  localStorage.clear()
  
  return (
    <>
      <div>App</div>
    </>
  )
}

export default App
