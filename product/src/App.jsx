import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import View from './components/View'
import Add from './components/Add'
import { Routes,Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  let appname="pro";

  return (
    <>
      <h1>Explore Products</h1>

      <Navbar/>
      <Routes>
        <Route path='/' element={<View/>}></Route>
<Route path='/add' element={<Add/>}></Route>
      </Routes>
      
    </>
  )
}
import { formControlClasses } from '@mui/material'
export default App
