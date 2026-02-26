import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'


const App = () => {

  const users=[
    { 
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'Satisfied'
    },
    { 
      img:'https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'Underserved'
    },
    { 
      img:'https://images.unsplash.com/photo-1748785826435-83c5062a5737?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'Underbanked'
    }
  ]

  return (
    <div>
      <div>
        <Section1/>
        <Section2/>
      </div>
    </div>
  )
}

export default App
