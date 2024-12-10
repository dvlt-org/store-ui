import React from 'react'
import "./components.css"
import Search from "../assets/search.png"
import Cart from "../assets/cart.png"
import Favourite from "../assets/favourite.png"

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className="navbarContainer">
                <div className="navbarLeft">
                    <span>Exclusive</span>
                </div>
                <div className="navbarCenter">
                    <ul className="navbarNavigation">
                        <li className='navbarItem'>Home</li>
                        <li className='navbarItem'>Contact</li>
                        <li className='navbarItem'>About</li>
                        <li className='navbarItem'>Sign Up</li>
                    </ul>
                </div>
                <div className="navbarRight">
                    <div className="navbarSearch">
                        <input type="text" className='searchInput' placeholder='What are you looking for?' />
                        <img className={"icon"} src={Search} alt={Search} />
                    </div>
                    <img className={"icon"} src={Favourite} alt="favourite icon" />
                    <img className={"icon"} src={Cart} alt="cart icon" />
                </div>
            </div>
        </div>
    )
}
