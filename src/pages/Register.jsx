import React from 'react'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
import RegisterImg from "../assets/register.png"
import "./pages.css"

export default function Register() {
    return (
        <div className='register micro'>
            <Navbar />
            <div className="registerContainer microContainer">
                <div className="registerLeft">
                    <img src={RegisterImg} alt={RegisterImg} />
                </div>
                <form className="registerForm">
                    <h1>Create an accaount</h1>
                    <p>Enter your details below</p>
                    <input type="username" placeholder='Name' />
                    <input type="email" placeholder='Email or Phone number' />
                    <input type="password" placeholder='Password' />
                    <button className='registerFormSubmit'>Create Accaunt</button>
                    <div className='registerFormLink'>
                        <p>Already have account? <span>Log in</span></p>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}
