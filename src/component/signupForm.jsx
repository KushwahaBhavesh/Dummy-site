import React, { useRef, useState } from 'react'
import '../css/signupForm.css'
import { Link, useNavigate } from "react-router-dom";
const signupForm = () => {

  const nameRef = useRef(undefined)
  const usernameRef = useRef(undefined)
  const emailRef = useRef(undefined)
  const passwordRef = useRef(undefined)
  const [loginData, setLogindata] = useState(false)
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const onSubmitHandle = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // Validation checks
    if (!name || !username || !email || !password) {
      setErrorMessage('All fields are required');
      return;
    }

    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long');
      return;
    }

    // Example email validation (you might want to use a more robust method)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setErrorMessage('Invalid email address');
      return;
    }

    // Check if the username already exists in localStorage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const isUsernameExists = existingUsers.some(user => user.username === username);
    const isEmailExist = existingUsers.some(user => user.email === email);
    if (isEmailExist) {
      setErrorMessage('Email already exists');
      return;
    }
    if (isUsernameExists) {
      setErrorMessage('Username already exists');
      return;
    }

    // Store user details in localStorage only if username doesn't exist
    const newUser = { name, username, email, password };
    if(newUser){
      localStorage.setItem('users', JSON.stringify([...existingUsers, newUser]));
      setLogindata(true)
    }

    // Clear input fields
    nameRef.current.value = '';
    usernameRef.current.value = '';
    emailRef.current.value = '';
    passwordRef.current.value = '';

    // Display success message
    setErrorMessage('');
    if (loginData) {
      alert('Registration successful');
      setTimeout(() => {
        navigate('/Dummy-site/profile')
      }, 2000)
    }

  }

  return (
    <div className='form-container'>
      <h3 className='form-heading'>Sign up to <span>Dummy</span></h3>
      {errorMessage && <span className="error">{errorMessage}</span>}
      <form className='signup-form'>
        <div className='name-input'>
          <div className='name'>
            <label htmlFor="name">Name</label><br />
            <input type="text" id="name" name="fname" placeholder='Name' ref={nameRef} />
          </div>
          <div className='name'>
            <label htmlFor="username">Username</label><br />
            <input type="text" id="username" name="fname" placeholder='Username' ref={usernameRef} />
          </div>
        </div>
        <div className='email-input'>
          <label htmlFor="email">Email</label><br />
          <input type="email" id="email" name="email" placeholder='xyz@gmail.com' ref={emailRef} />
        </div>
        <div className='password-input'>
          <label htmlFor="password">Password</label><br />
          <input type="password" id="password" name="password" placeholder='********' ref={passwordRef} />
        </div>

        {/* Checkbox */}
        <div className='checkbox-input'>
          <input type="checkbox" className='largerCheckbox' id="checkbox" name="checkbox" />
          <label htmlFor="checkbox">Creating an account means you're okay with our
            <Link to='#'>Terms of Service, Privacy Policy</Link> and our default
            <Link to='#'> Notification Settings</Link> </label><br />
        </div>
        <button className='btn' type='button' onClick={onSubmitHandle}>Create Account</button>
      </form>
    </div>
  );
}

export default signupForm
