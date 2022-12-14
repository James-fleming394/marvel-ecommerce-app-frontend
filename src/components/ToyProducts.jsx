import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const AllToyProducts = () => {

    const [toys, showToy] = useState([]);
    const [formState, setFormState] = useState({
        name: '',
        img: '',
        price: ''
    })

    let { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        const apiCall = async () => {
            let response = await axios.get('http://localhost:5001/api/toys')
            showToy(response.data.allToys)
        }
        apiCall();
    }, [])

    const viewToy = (toy) => {
        navigate(`/toys/${toy._id}`);
    }


    const handleChange = (event) => {
        setFormState({...formState, [event.target.id]: event.target.value})
    }

    const handleSubmit = async (event) => {

        let newToy = await axios.post(`http://localhost:5001/api/toys`, formState)
        .then((response) => {
            return response
        })
        .catch((error) => {
            console.log(error)
        })

        showToy([...toys, newToy.data.newToy])
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
                <h1>Toys on Sale</h1>
            </div>
            <div className="comics-product-page" key={toys._id}>
                {toys.map((toy) => (
                    <div className="comics-product">
                        <img className="comics-image" src={toy.img} alt="picture" />
                        <div className="comic-info">
                        <h2>{toy.name}</h2>
                        <h3>{toy.price}</h3>
                        <button className="comic-button" onClick={() => viewToy(toy)} key={toys._id} >View More</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="comic-view">
                <div className="add-comic">
                    <h1>Add your Toy Here:</h1>
                    <form className="comic-form" onSubmit={handleSubmit}>
                        <label htmlFor="name">Toy Name:</label>
                        <input
                        id="name"
                        placeholder="Type Here..."
                        value={formState.name}
                        onChange={handleChange}
                        />
                        <label htmlFor="img">Toy Picture:</label>
                        <input
                        id="img"
                        placeholder="Picture URL Here..."
                        value={formState.img}
                        onChange={handleChange}
                        />
                        <label htmlFor="price">Toy Price:</label>
                        <input
                        id="price"
                        placeholder="Type Here..."
                        value={formState.price}
                        onChange={handleChange}
                        />
                        <br></br>
                        <button className="category-button" type="submit">Add Toy</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AllToyProducts