import React from 'react'
import arrowLeft from "../assets/arrowLeft.png"
import arrowRight from "../assets/arrowRight.png"
import Phone from "../assets/phone.png"
import Computer from "../assets/computer.png"
import Watch from "../assets/watch.png"
import Product from './Product'
import "./components.css"

export default function Products({ type }) {
    return (
        <div className='products navbar'>
            <div className='productsContainer'>
                <div className="pTexts">
                    <div className='pDiv'></div>
                    <span>{type === "product" ? "Today's" : "Best Selling Products"}</span>
                </div>
                <div className="productsHeader">

                    {
                        type === "product" ? (
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
                        ) : <h1>Best Selling Products</h1>
                    }
                    <div className="pFlashArrow">
                        {
                            type === "product" ? (
                                <>
                                    <img src={arrowLeft} alt={arrowLeft} />
                                    <img src={arrowRight} alt={arrowRight} />
                                </>
                            ) : <button>View all</button>
                        }
                    </div>
                </div>
                <div className="productItems">
                    {
                        type === "product" ? (
                            <>
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
                            </>
                        ) : (
                            <>
                                <Product />
                                <Product />
                                <div className="categories">
                                    <div className="pTexts">
                                        <div className='pDiv'></div>
                                        <span>Categories</span>
                                    </div>
                                    <h1 className='browse' style={{ flexDirection: 'column', marginTop: "10px" }}>Browse By Category</h1>
                                    <div className="categoriesItems">
                                        <div className="categoriesItem">
                                            <img src={Phone} alt="phone" />
                                            <span>Phones</span>
                                        </div>
                                        <div className="categoriesItem">
                                            <img src={Computer} alt="computer" />
                                            <span>Computer</span>
                                        </div>
                                        <div className="categoriesItem">
                                            <img src={Watch} alt="watch" />
                                            <span>Watch</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>
                <button className='productsButton'>View All Products</button>
            </div>
        </div>
    )
}
