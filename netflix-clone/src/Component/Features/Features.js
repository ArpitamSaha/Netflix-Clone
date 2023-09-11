import React from 'react';
import feature1 from '../../Images/feature-1.png';
import feature2 from '../../Images/feature-2.png';
import feature3 from '../../Images/feature-3.png';
import feature4 from '../../Images/feature-4.png';

import './Features.css';
const Features = () => {
    return (
        <div className="features">

            <div className="row top-border">
                <div className="text-col">
                    <h2>Enjoy on yopur TV</h2>
                    <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                </div>
                <div className="img-col">
                    <img src={feature1} alt='Feature1' />
                </div>
            </div>

            <div className="row top-border">
                <div className="img-col">
                    <img src={feature2} alt='Feature2' />
                </div>
                <div className="text-col">
                    <h2>Download your shows to watch offline</h2>
                    <p>Save your favourites easily and always have something to watch.</p>
                </div>
            </div>
            <div className="row top-border">
                <div className="text-col">
                    <h2>Watch everywhere</h2>
                    <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                </div>
                <div className="img-col">
                    <img src={feature3} alt='Feature3' />
                </div>
            </div>
            <div className="row top-border">
                <div className="img-col">
                    <img src={feature4} alt='Feature4' />
                </div>
                <div className="text-col">
                    <h2>Create profiles for kids</h2>
                    <p>Send children on adventures with their favourite characters in a space made just for them—free with
                        your membership.</p>
                </div>
            </div>
        </div>

    );
};

export default Features;