import React from 'react'
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import {Route,Routes} from "react-router-dom"
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <div className='bg-slate-900 '>
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
    </div>
  )
}

export default App