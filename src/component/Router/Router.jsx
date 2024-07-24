import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../Home/Home'
import Profile from '../Profile'
import Survey from '../Survey'
const RoutePath = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/design1' element={<Profile/>}></Route>
            <Route path='/design2' element={<Survey/>}></Route>
        </Routes>
      
    </div>
  )
}

export default RoutePath

