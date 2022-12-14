import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Checkout = () => {

    const [comics, setComics] = useState({});
    const [toys, setToys] = useState({});
    const [apparels, setApparels] = useState({});
    const [id, setId] = useState({})

    const getItems = async () => {
        const response = await axios.get(`http://localhost:5001/api/cart`);
        setComics(response.data[response.data.length - 1].comics)
        setToys(response.data[response.data.length - 1].toys)
        setApparels(response.data[response.data.length - 1].apparels)
        setId(response.data[response.data.length - 1]._id)

    }

    useEffect(() => {
        getItems()
    }, []);

    const navigate = useNavigate();

    const deleteCart = async () => {
        const response = await axios.delete(`http://localhost:5001/api/cart/${id}`);
        navigate(`/cart`)
    }

    return (
        <div className="checkout">
            <div className="checkout-title">
                <h1>Shopping Cart</h1>
            </div>
            <div className="bag-wishlist">
                <Link className="wishlist" to="/cart">Shopping Bag(0)</Link>
                <Link className="wishlist" to="/wishlist">Wishlist(0)</Link>
            </div>
            <div className="shopping-cart-items">       
                <h2>Your Bag:</h2>
                <div className="items">
                    {/* {comics.map((comic) => (
                        <div key={comic._id}>
                            <h4>{comic.name}</h4>
                            <h5>{comic.price}</h5>
                        </div>
                    ))}
                    {toys.map((toy) => (
                        <div key={toy._id}>
                            <h4>{toy.name}</h4>
                            <h5>{toy.price}</h5>
                        </div>
                    ))}
                    {apparel.map((apparel) => (
                        <div key={apparel._id}>
                            <h4>{apparel.name}</h4>
                            <h5>{apparel.price}</h5>
                        </div>
                    ))} */}
                </div>
                <section className="summary">
                    <h2>Total Cost: </h2>
                </section>
                <div className="checkout-buttons">
                <button className="continue-button" onClick={() => navigate('/products')}>Continue Shopping</button>
                <br></br>
                <button className="purchase-button2" onClick={() => alert('Thanks for shopping at Marvel Engine!')}>Checkout Now</button>
                </div>
                <br></br>
                <div >
                    <button className="delete-button-checkout" id={id} onClick={deleteCart}>Delete Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Checkout