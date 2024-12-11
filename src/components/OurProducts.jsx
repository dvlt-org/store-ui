import React from 'react'
import Product from "../components/Product"
import arrowLeft from "../assets/arrowLeft.png"
import arrowRight from "../assets/arrowRight.png"
import "./components.css"

export default function OurProducts() {
    return (
        <div className='ourProduct navbar'>
            <div className="ourProductContainer navbarContainer">
                <div className='pTexts'>
                    <div className='pDiv'></div>
                    <span>Our Products</span>
                </div>
                <div className='ourProuctTitle'>
                    <h1>Explore Our Products</h1>
                    <div className='pFlashArrow'>
                        <img src={arrowLeft} alt={arrowLeft} />
                        <img src={arrowRight} alt={arrowRight} />
                    </div>
                </div>
                <div className='ourProducts'>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        </div>
    )
}
