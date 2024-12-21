import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/sign-up' Component={Signup} />
        <Route path='/login' element={<Login />} /> 
      </Routes>
    </BrowserRouter>
  )
}
