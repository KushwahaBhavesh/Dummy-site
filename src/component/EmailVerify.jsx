import React from 'react'
import { MdMarkEmailUnread } from "react-icons/md";
import '../css/emailverify.css'
import Layout from './Layout/Layout';

const EmailVerify = () => {
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
        <p>Dont't receive the email? Check your Spam folder,it may have been caught by a filter.<br/> if you still dont't see it,you can <a> resend the confirmation email.</a></p>
        <p>Wrong email address? <a>Change it.</a></p>
      </div>
    </section>
</Layout>
  </>
}

export default EmailVerify
