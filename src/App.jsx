import React from 'react'

import NotFound from "./component/NotFound/NotFound"
import './App.css'
import { Route, Routes } from "react-router-dom";
import Signup from './pages/Signup'
import Profile from './pages/profile'
import Option from './pages/Option'
import Emailverify from './pages/Emailverify'

const App = () => {
  return <>
    <div className='container'>
      <Routes>
      <Route  path='*' element={<NotFound/>}/>
        <Route path='/Dummy-site/' element={<Signup />} />
        <Route path='/Dummy-site/profile' element={<Profile />} />
        <Route path='/Dummy-site/option' element={<Option/>} />
        <Route path='/Dummy-site/verifyEmail' element={<Emailverify/>} />
        
      </Routes>
    </div>

  </>
}

export default App
