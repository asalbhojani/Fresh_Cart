import { useState } from 'react'
import './App.css'
import NavbarMain from './components/Navbar/NavbarMain'
import Slider from './components/Slider/Slider'
import Cards from './components/Cards/Cards'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavbarMain/>
   <Slider/>
   <Cards/>
   <Footer/>
    </>
  )
}

export default App
