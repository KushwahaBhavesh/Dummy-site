import React from 'react'
import Profile from './component/profile'

import './App.css'
import { Route, Routes } from "react-router-dom";
import Option from './component/Option';
import Signup from './component/Signup'
import EmailVerify from './component/EmailVerify'

const App = () => {
  return <>
    <div className='container'>
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/option' element={<Option/>} />
        <Route path='/verifyEmail' element={<EmailVerify/>} />
        
      </Routes>
    </div>

  </>
}

export default App
