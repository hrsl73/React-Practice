import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Product from './pages/Product'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Kuchbhi from './pages/Kuchbhi'
import Details from './pages/Details'

function App() {
  return (
    <div >
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path='men' element={<Men/>}/>
          <Route path='women' element={<Women/>}/>
          <Route path='kids' element={<Kids/>}/>
        </Route>
        <Route path='/kuchbhi' element={<Kuchbhi/>}></Route>
        <Route path='/kuchbhi/:id' element={<Details/>}></Route>
        <Route path='*' element={<NotFound />}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App