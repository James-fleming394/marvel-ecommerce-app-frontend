import React from "react";
import { Link } from "react-router-dom";
// import LOGO from '../assets/img/Marvel-Logo.png'
// import CART from '../assets/img/cart.png'
// import SEARCH from '../assets/img/search.png'
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    let navigate = useNavigate();

    return (
        <div className="navbar">
            <div className="navbar-logo" href="/">
                <img className="marvel-logo" onClick={() => navigate('/home')} src='/img/Marvel-Logo.png' alt="Marvel Logo" />
            <div className="search-bar">
                <form>
                <input className="search-bar-input" type="search" placeholder="Search Here..." />
                <button className="search-button" type="submit"><img className="search-icon" src='/img/search.png' alt="search"/></button>
                </form>
            </div>
            </div>
            <div className="navbar-links">
            <Link className="navbar-link" to="/home">Home</Link>
            <Link className="navbar-link" to="/register">Signup</Link>
            <Link className="navbar-link" to="/login">Login</Link>
            <Link className="navbar-link" to="/products">Products</Link>
            <Link className="navbar-link" to="/cart"><img className="cart" src='/img/cart.png' alt="cart-icon" /></Link>
            </div>
        </div>
    )
}

export default Navbar