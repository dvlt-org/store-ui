import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import SingleProduct from "./pages/SingleProduct"
import Wishlist from "./pages/Wishlist"
import Cart from "./pages/Cart"
import Contact from "./pages/Contact"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishList" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  )
}



export default App
