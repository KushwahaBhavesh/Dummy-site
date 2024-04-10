import React from 'react'
import Profile from './component/profile'
import NotFound from "./component/NotFound/NotFound"
import './App.css'
import { Route, Routes } from "react-router-dom";
import Option from './component/Option';
import Signup from './component/Signup'
import Emailverify from './component/Emailverify'

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
