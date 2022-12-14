import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ApparelPage = () => {
    
    const [formState, setFormState] = useState({
        name: '',
        img: '',
        price: ''
    });

    const [apparel, setApparel] = useState({});
    const [apparels, setApparels] = useState({});

    let { id } = useParams();
    let navigate = useNavigate();

    const handleChange = (event) => {
        setFormState({...formState, [event.target.id]: event.target.value})
    }

    useEffect(() => {
        const getApparel = async () => {
            let response = await axios.get(`https://marvel-engine-backend.herokuapp.com/api/apparel/${id}`)
            setApparel(response.data)
        }
        getApparel()
    }, []);

    const handleUpdate = async (event) => {
        event.preventDefault();
        let response = await axios.put(`https://marvel-engine-backend.herokuapp.com/api/apparel/${id}`, formState)
        .then((response) => {
            return response;
        })
        .catch ((error) => {
            console.log(error)
        })
        setApparel([apparel, response.data])
        setFormState({
            name: '',
            img: '',
            price: ''
        })
    }

    const deleteApparel = async (event) => {
        event.preventDefault()
        let response = await axios.delete(`https://marvel-engine-backend.herokuapp.com/api/apparel/${id}`)
        setApparel(response);
    }

    return (
        <div>
            <Navbar />
            <div className="comics-product-page" key={apparels._id}>
                    <div className="comics-product">
                        <img className="comics-image" src={apparel.img} alt="picture" />
                        <div className="comic-info">
                        <h2>{apparel.name}</h2>
                        <h3>{apparel.price}</h3>
                        </div>
                    </div>
            </div>
            <div className="comic-view">
                <h1>Add or Delete </h1>
            <button className="category-button" >Add Apparel to Cart</button>
            <br></br>
            <button className="category-button" onClick={deleteApparel}>Delete this Apparel</button>
            </div>
            <div className="comic-view">
            <form className="add-comic" onSubmit={handleUpdate}>
            <h2 className="update-form">Update Form</h2>
                <label htmlFor='name'>New Apparel Name:</label>
                <input id='name'
                    placeholder="Type Here..."
                    value={formState.name}
                    onChange={handleChange} />
                <label htmlFor='img'>New Apparel Picture:</label>
                <input id='img'
                    placeholder="Picture URL Here..."
                    value={formState.img}
                    onChange={handleChange} />
                <label htmlFor='price'>New Apparel Price:</label>
                <input id='price'
                    placeholder="Type Here..."
                    value={formState.price}
                    onChange={handleChange} />
                <button className="category-button" type='submit'>Update Apparel Now!</button>
            </form>
            </div>
            <Footer />
        </div>
    )
}

export default ApparelPage