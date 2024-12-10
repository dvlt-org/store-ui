import React from 'react'
import arrowLeft from "../assets/arrowLeft.png"
import arrowRight from "../assets/arrowRight.png"
import Product from './Product'
import "./components.css"

export default function Products() {
    return (
        <div className='products navbar'>
            <div className='productsContainer'>
                <div className="pTexts">
                    <div className='pDiv'></div>
                    <span>Today's</span>
                </div>
                <div className="productsHeader">
                    <div className="pFlashSales">
                        <h1>Flash Sales</h1>
                        <div className="pFlashHour">
                            <div>
                                <span>Days</span>
                                <span className='hour'>03</span>
                            </div>
                            <div>
                                <span >Hours</span>
                                <span className='hour'>23</span>
                            </div>
                            <div>
                                <span >Minutes</span>
                                <span className='hour'>19</span>
                            </div>
                            <div>
                                <span>Seconds</span>
                                <span className='hour'>56</span>
                            </div>
                        </div>
                    </div>
                    <div className="pFlashArrow">
                        <img src={arrowLeft} alt={arrowLeft} />
                        <img src={arrowRight} alt={arrowRight} />
                    </div>
                </div>
                <div className="productItems">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
                <button className='productsButton'>View All Products</button>
            </div>
        </div>
    )
}
