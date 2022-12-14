import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const AllComicProducts = () => {

    const [comics, showComic] = useState([]);
    const [formState, setFormState] = useState({
        name: '',
        img: '',
        price: ''
    })

    let { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        const apiCall = async () => {
            let response = await axios.get('http://localhost:5001/api/comics')
            showComic(response.data.allComics)
        }
        apiCall();
    }, [])

    const viewComic = (comic) => {
        navigate(`/comics/${comic._id}`);
    }


    const handleChange = (event) => {
        setFormState({...formState, [event.target.id]: event.target.value})
    }

    const handleSubmit = async (event) => {

        let newComic = await axios.post(`http://localhost:5001/api/comics`, formState)
        .then((response) => {
            return response
        })
        .catch((error) => {
            console.log(error)
        })

        showComic([...comics, newComic.data.newComic])
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
                <h1>Comics on Sale</h1>
            </div>
            <div className="comics-product-page" key={comics._id}>
                {comics.map((comic) => (
                    <div className="comics-product">
                        <img className="comics-image" src={comic.img} alt="picture" />
                        <div className="comic-info">
                        <h2>{comic.name}</h2>
                        <h3>{comic.price}</h3>
                        <button className="comic-button" onClick={() => viewComic(comic)} key={comics._id} >View More</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="comic-view">
                <div className="add-comic">
                    <h1>Add your Comic Here:</h1>
                    <form className="comic-form" onSubmit={handleSubmit}>
                        <label htmlFor="name">Comic Name:</label>
                        <input
                        id="name"
                        placeholder="Type Here..."
                        value={formState.name}
                        onChange={handleChange}
                        />
                        <label htmlFor="img">Comic Cover:</label>
                        <input
                        id="img"
                        placeholder="Cover URL Here..."
                        value={formState.img}
                        onChange={handleChange}
                        />
                        <label htmlFor="price">Comic Price:</label>
                        <input
                        id="price"
                        placeholder="Type Here..."
                        value={formState.price}
                        onChange={handleChange}
                        />
                        <br></br>
                        <button className="category-button" type="submit">Add Comic</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AllComicProducts