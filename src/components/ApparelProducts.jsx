import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const AllApparelProducts = () => {

    const [apparels, showApparel] = useState([]);
    const [formState, setFormState] = useState({
        name: '',
        img: '',
        price: ''
    })

    let { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        const apiCall = async () => {
            let response = await axios.get('http://localhost:5001/api/apparel')
            showApparel(response.data.allApparel)
        }
        apiCall();
    }, [])

    const viewApparel = (apparel) => {
        navigate(`/apparel/${apparel._id}`);
    }


    const handleChange = (event) => {
        setFormState({...formState, [event.target.id]: event.target.value})
    }

    const handleSubmit = async (event) => {

        let newApparel = await axios.post(`http://localhost:5001/api/apparel`, formState)
        .then((response) => {
            return response
        })
        .catch((error) => {
            console.log(error)
        })

        showApparel([...apparels, newApparel.data.newApparel])
        setFormState({
            name: '',
            img: '',
            price: ''
        })
    }


    return (
        <div>
            <Navbar />
            <div className="sale-header">
                <h1>Apparel on Sale</h1>
            </div>
            <div className="comics-product-page" key={apparels._id}>
                {apparels.map((apparel) => (
                    <div className="comics-product">
                        <img className="comics-image" src={apparel.img} alt="picture" />
                        <div className="comic-info">
                        <h2>{apparel.name}</h2>
                        <h3>{apparel.price}</h3>
                        <button className="comic-button" onClick={() => viewApparel(apparel)} key={apparels._id} >View More</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="comic-view">
                <div className="add-comic">
                    <h1>Add your Apparel Piece Here:</h1>
                    <form className="comic-form" onSubmit={handleSubmit}>
                        <label htmlFor="name">Apparel Name:</label>
                        <input
                        id="name"
                        placeholder="Type Here..."
                        value={formState.name}
                        onChange={handleChange}
                        />
                        <label htmlFor="img">Apparel Picture:</label>
                        <input
                        id="img"
                        placeholder="Picture URL Here..."
                        value={formState.img}
                        onChange={handleChange}
                        />
                        <label htmlFor="price">Apparel Price:</label>
                        <input
                        id="price"
                        placeholder="Type Here..."
                        value={formState.price}
                        onChange={handleChange}
                        />
                        <br></br>
                        <button className="category-button" type="submit">Add Apparel</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )

}

export default AllApparelProducts