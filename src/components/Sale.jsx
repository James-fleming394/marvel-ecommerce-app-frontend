import React from "react";
import { useNavigate } from 'react-router-dom'

const Sale = () => {

    const navigate = useNavigate();

    return (
        <>
        <div className="home-page">
            <div className="home-title">
                <h1>Welcome to Marvel Engine!</h1>
            </div>
        </div>
        <div className="home-page2">
                <div className="sale">
                    <h1>Today's Sales</h1><span>Don't miss out on these amazing deals!</span>
                    <h3>30% off!</h3>
                    <div className="sale-items">
                        <img className="sale-pic" src="https://m.media-amazon.com/images/I/61bbm-+wxwL._SX418_BO1,204,203,200_.jpg" alt="marvel book" />
                        <img className="sale-pic" src="https://m.media-amazon.com/images/I/61e8-nPFoZL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg" alt="marvel book" />
                        <img className="sale-pic" src="https://m.media-amazon.com/images/I/61VhOdqZWmL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg" alt="marvel book" />
                    </div>
                    <div>
                        <button className="sale-button" onClick={() => navigate("/products")}>Shop Now</button>
                    </div>
                </div>
            </div>
            </>
    )
}

export default Sale