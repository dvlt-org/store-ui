import React from 'react'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
import LoginImg from "../assets/register.png"
import "./pages.css"

export default function login() {
  return (
    <div className='login micro'>
      <Navbar />
      <div className="loginContainer microContainer">
        <div className="loginLeft">
          <img src={LoginImg} alt={LoginImg} />
        </div>
        <form className="loginForm">
          <h1>Log in to Exclusive</h1>
          <p>Enter your details below</p>
          <input type="email" placeholder='Email or Phone number' />
          <input type="password" placeholder='Password' />
          <div className='loginFormLink'>
            <button className='loginFormSubmit'>Log in</button>
            <p>Forget Password ?</p>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  )
}
