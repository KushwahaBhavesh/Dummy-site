import React from 'react'
import { MdMarkEmailUnread } from "react-icons/md";
import '../css/emailverify.css'
import Layout from './Layout/Layout';
import { Link } from 'react-router-dom';

const Emailverify = () => {
  return <>
    <Layout>
      <section className='email-verify-container'>
        <div className='verify-heading'>
          <h2>
            Please verify your email...
          </h2>
        </div>
        <MdMarkEmailUnread className='verify-icon' />
        <div className='verify-message'>
          <p>Please verify your email address. We've sent a confirmation email to </p>
          <p>bhavesh18122002@gmail.com</p>
          <p>Click the confirmation link in that email to begin use <span>dummy</span>.</p>
          <p>Dont't receive the email? Check your Spam folder,it may have been caught by a filter.<br /> if you still dont't see it,you can <Link> resend the confirmation email.</Link></p>
          <p>Wrong email address?<Link to='#'>Change it.</Link></p>
        </div>
        <Link to="/Dummy-site/signup"><button>Home</button></Link>
      </section>
    </Layout>
  </>
}

export default Emailverify
