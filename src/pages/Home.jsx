import React from 'react'
import Products from '../components/Products'
import Navbar from "../components/Navbar"
import Discount from "../components/Discount"
import OurProduct from "../components/OurProducts"
import Header from "../components/Header"
import Microphone from "../assets/microphone.png"
import PlayStation from "../assets/playstation.png"
import Het from "../assets/het.png"
import Support from "../components/Support.jsx"
import Footer from "../components/Footer.jsx"
import "./pages.css"

export default function Home() {
  return (
    <div>
      <Discount />
      <Navbar />
      <Header />
      <Products type={"product"} />
      <Products type={"first"} />
      <div className="micro">
        <div className="microContainer">
          <div className="micro-left">
            <p className='microLeftCategory'>Categories</p>
            <h1>Enhance Your Music Experience</h1>
            <div className='microLeftItems'>
              <div className='microLeftItem'>
                <span>23</span>
                <p>Hours</p>
              </div>
              <div className='microLeftItem'>
                <span>05</span>
                <p>Days</p>
              </div>
              <div className='microLeftItem'>
                <span>59</span>
                <p>Minutes</p>
              </div>
              <div className='microLeftItem'>
                <span>35</span>
                <p>Seconds</p>
              </div>
            </div>
            <button>Buy Now!</button>
          </div>
          <div className="micro-right">
            <img src={Microphone} alt={Microphone} />
          </div>
        </div>
      </div>
      <OurProduct />
      <div className="featured micro">
        <div className='featuredContainer microContainer'>
          <div className='featuredTexts'>
            <div className='featuredTextDiv'></div>
            <div className='featuredTextSpan'>Featured</div>
          </div>
          <h1>New Arrival</h1>
          <div className='featuredItems'>
            <img className='featuredLeft' src={PlayStation} alt={PlayStation} />
            <div className='featuredItem'>
              <img className='featuredItemImg' src={Het} alt="" />
              <div className='featuredBottom'>
                <img src={Het} alt="there is het" />
                <img src={Het} alt="there is het" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Support />
      <Footer />
    </div>
  )
}
