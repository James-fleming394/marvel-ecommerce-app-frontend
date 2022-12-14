import React from "react";
import linkedin from '../assets/img/linkedin.png';
import github from '../assets/img/github.png';
import twitter from '../assets/img/twitter.png';  


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <h4>Marvel Engine</h4>
                <p>© 2022 Copyright: James Fleming</p>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/james--fleming/"><img src={linkedin} alt="LinkedIn"></img></a>
                    <a href="https://github.com/James-fleming394"><img src={github} alt="Github"></img></a>
                    <a href="https://twitter.com/jflem394"><img src={twitter} alt="Twitter"></img></a>
                </div>
                <div className="email">
                    <h5>Email: James.Fleming394@gmail.com</h5>
                </div>
            </div>
        </div>
    )
}

export default Footer