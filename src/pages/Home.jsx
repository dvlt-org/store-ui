import React from 'react'
import Products from '../components/Products'
import Navbar from "../components/Navbar"
import Discount from "../components/Discount"
import Header from "../components/Header"

export default function Home() {
  return (
    <div>
      <Discount />
      <Navbar />
      <Header />
      <Products />
    </div>
  )
}
