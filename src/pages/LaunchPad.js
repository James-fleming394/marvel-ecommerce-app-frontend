import React from 'react';
import { useNavigate } from 'react-router-dom';


const LaunchPad = () => {

    const navigate = useNavigate();

    return (
        <div className="launchpad">
            <div className="text-space">
                <div className="title">
                    <h1>Marvel Engine</h1>
                </div>
                <div>
                    <button className="launch-button" onClick={() => navigate('/home')}><span>Enter Here</span></button>
                </div>
            </div>
        </div>
    )
}

export default LaunchPad