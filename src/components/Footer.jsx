import React from 'react'
import Send from "../assets/send.png"
import "./components.css"

export default function Footer() {
    return (
        <div className='navbar footer'>
            <div className="navbarContainer footerContainer">
                <div className="footerNavigations">
                    <ul className='footerNavigationItems'>
                        <li className="footerNavigationItem first">Exclusive</li>
                        <li className="footerNavigationItem">Subscribe</li>
                        <li className="footerNavigationItem">Get 10% off your first order</li>
                        <li className="footerNavigationItem">
                            <div className='footerNavigationForm'>
                                <input type="text" placeholder='Enter your email' />
                                <img src={Send} alt="send.png" />
                            </div>
                        </li>
                    </ul>
                    <ul className='footerNavigationItems'>
                        <li className="footerNavigationItem first">Support</li>
                        <li className="footerNavigationItem">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
                        <li className="footerNavigationItem">exclusive@gmail.com</li>
                        <li className="footerNavigationItem">+88015-88888-9999</li>
                    </ul>
                    <ul className='footerNavigationItems'>
                        <li className="footerNavigationItem first">Account</li>
                        <li className="footerNavigationItem">My Account</li>
                        <li className="footerNavigationItem">Login / Register</li>
                        <li className="footerNavigationItem">Cart</li>
                        <li className="footerNavigationItem">Wishlist</li>
                        <li className="footerNavigationItem">Shop</li>
                    </ul>
                    <ul className='footerNavigationItems'>
                        <li className="footerNavigationItem first">Quick Link</li>
                        <li className="footerNavigationItem">Privacy Policy</li>
                        <li className="footerNavigationItem">Terms Of Use</li>
                        <li className="footerNavigationItem">FAQ</li>
                        <li className="footerNavigationItem">Contact</li>
                    </ul>
                    <ul className='footerNavigationItems'>
                        <li className="footerNavigationItem first">Download App</li>
                        <li className="footerNavigationItem downloadLink" >Save $3 with App New User Only</li>
                    </ul>
                </div>
                <p>Copyright Rimel 2022. All right reserved</p>
            </div>
        </div>
    )
}
