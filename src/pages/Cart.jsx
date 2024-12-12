import React from 'react'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
import Pult from "../assets/playsitationPult.png"
import "./pages.css"


export default function Cart() {
  return (
    <div>
      <Navbar />
      <div className="cart">
        <div className="cartContainer">
          <div className='cartTexts'>
            <ul>
              <li>Product</li>
              <li>
                <img src={Pult} alt="pult" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
