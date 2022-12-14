import React from "react";
import { useNavigate } from "react-router-dom";

const Category = () => {

    let navigate = useNavigate();


    return (
    <>
        <div className="product-category">
            <div className="title-category">
                <h1 onClick={() => navigate("/comics")} >Shop Comics</h1>
            </div>
            <img className="category-image" 
            src="https://i.pinimg.com/564x/64/8a/9a/648a9a506a5a850088568599a3f707c5.jpg" />
        </div>
        <div className="product-category">
        <div className="title-category">
                <h1 onClick={() => navigate("/toys")}>Shop Toys</h1>
            </div>
            <img className="category-image" 
            src="https://cdn.wallpapersafari.com/56/34/NG1oO0.jpg" />
        </div>
        <div className="product-category">
        <div className="title-category">
                <h1 onClick={() => navigate("/apparel")} >Shop Apparel</h1>
            </div>
            <img className="category-image" 
            src="https://i.pinimg.com/564x/d1/c9/28/d1c928d2bafb09fdcf6aa22ca60a2031.jpg" />
        </div>
        <div className="product-category">
        <div className="title-category">
                <h1 onClick={() => navigate("/apparel")} >Shop Movies</h1>
            </div>
            <img className="category-image" 
            src="https://wallpapercave.com/wp/wp4330404.jpg" />
        </div>
        <div className="product-category">
        <div className="title-category">
                <h1 onClick={() => navigate("/apparel")} >Shop Shows</h1>
            </div>
            <img className="category-image" 
            src="https://i.pinimg.com/564x/ec/6a/c8/ec6ac86e37b16a15f92aa8df85ae7a61.jpg" />
        </div>
    </>
    )
}

export default Category