import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'


const App = () => {

const users = [
  { 
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1288&auto=format&fit=crop',
    intro: '',
    color:'blue',
    tag: 'Satisfied'
  },
  { 
    img: 'https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=1287&auto=format&fit=crop',
    intro: '',
    color:'lightblue',
    tag: 'Underserved'
  },
  { 
    img: 'https://images.unsplash.com/photo-1748785826435-83c5062a5737?q=80&w=1287&auto=format&fit=crop',
    intro: '',
    color:'purple',
    tag: 'Underbanked'
  },

  { 
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1287&auto=format&fit=crop',
    intro: '',
    color:'lightgreen',
    tag: 'Satisfied'
  },
  { 
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1287&auto=format&fit=crop',
    intro: '',
    color:'lightcoral',
    tag: 'Growing'
  },
  { 
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop',
    intro: '',
    color:'orange',
    tag: 'New User'
  },
  { 
    img: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1287&auto=format&fit=crop',
    intro: '',
    color:'pink',
    tag: 'Premium'
  },
  { 
    img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1287&auto=format&fit=crop',
    intro: '',
    color:'lightsalmon',
    tag: 'Loyal'
  },
  { 
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1287&auto=format&fit=crop',
    intro: '',
    color:'teal',
    tag: 'Exploring'
  },
  { 
    img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1287&auto=format&fit=crop',
    intro: '',
    color:'royalblue',
    tag: 'Active'
  }
]

  return (
    <div>
      <div>
        <Section1 users={users}/>
        <Section2/>
      </div>
    </div>
  )
}

export default App
