import React from 'react'
import Discount from "../components/Discount"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Product from "../components/Product"
import "./pages.css"

export default function Wishlist() {
    return (
        <div>
            <Discount />
            <Navbar />
            <div className='wishlist'>
                <div className='wishlistContainer'>
                    <div className='wishlistMoveHeader'>
                        <h1>Wishlist(4)</h1>
                        <button className='wishlistButton'>Move All to Blog</button>
                    </div>
                    <div className='wishlistMoveProducts'>
                        <Product type={"wishlist"} />
                        <Product type={"wishlist"} />
                        <Product type={"wishlist"} />
                        <Product type={"wishlist"} />
                        <Product type={"wishlist"} />
                        <Product type={"wishlist"} />
                        <Product type={"wishlist"} />
                        <Product type={"wishlist"} />
                    </div>
                    <div className='wishlistForYouHeader'>
                        <div className='wishlistHeaderLeft'>
                            <div></div>
                            <h1>Just For You</h1>
                        </div>
                        <button className='wishlistButton'>See All</button>
                    </div>
                    <div className='wishlistForYouProducts'>
                        <Product type={"wishlist"} />
                        <Product type={"wishlist"} />
                        <Product type={"wishlist"} />
                        <Product type={"wishlist"} />
                        <Product type={"wishlist"} />
                        <Product type={"wishlist"} />
                        <Product type={"wishlist"} />
                        <Product type={"wishlist"} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
