import React from 'react'
import Supportt from "../assets/supportt.png"
import Car from "../assets/Car.png"
import "./components.css"

export default function Support() {
  return (
    <div className='support navbar'>
      <div className="navbarContainer supportContainer">
        <div className='supportItems'>
          <div className="supportItem">
            <img src={Supportt} alt={""} />
            <div className="supportItemTexts">
              <h3>FREE AND FAST DELIVERY</h3>
              <p>Free delivery for all orders over $140</p>
            </div>
          </div>
          <div className="supportItem">
            <img src={Car} alt={""} />
            <div className="supportItemTexts">
              <h3>24/7 CUSTOMER SERVICE</h3>
              <p>Friendly 24/7 customer support</p>
            </div>
          </div>
          <div className="supportItem">
            <img src={Car} alt={""} />
            <div className="supportItemTexts">
              <h3>MONEY BACK GUARANTEE</h3>
              <p>We reurn money within 30 days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
