import './App.css'

function App() {

  const pageScrolling = (speed) => {
    if(speed>0){
      console.log('scrolling  downward @', Math.floor(speed)); 
    }else{
      console.log('scrolling upward @', Math.floor(speed));
    }
  }

  return (
    <div className="main" onWheel={(e)=>{
      pageScrolling(e.deltaY)
    }}>
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  )
}

export default App