import React from 'react'
import '../css/signup.css'
import vectorGraphic from '../assets/vector1.gif'
import SignupForm from '../component/signupForm'
import Layout from '../component/Layout/Layout'

const Signup = () => {
  return <Layout>
    <section className='row'>
      <div className='col-1'>
        <div className="slogan">
          <p>Discover the World's top Designers & Creatives.</p>
        </div>
        <div className="vectors">
          <img src={vectorGraphic} width="400" height="350" />
        </div>
      </div>
      <div className='col-2'>
        <div className="signin-Link">
          <span>Already a member?<a href="#"> Sign in</a></span>
        </div>
        <SignupForm />
      </div>
    </section>
  </Layout>

}

export default Signup
