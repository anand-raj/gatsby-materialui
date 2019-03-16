import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default () => {
    return (
        <div align="center">
            <Carousel transitionTime={1000} showThumbs={false} autoPlay interval={5000} infiniteLoop>
                <div>
                    <img src="https://source.unsplash.com/1110x400/?landscape" alt="landscape" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://source.unsplash.com/1110x400/?nature" alt="landscape" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://source.unsplash.com/1110x400/?nightsky" alt="landscape" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    );
}

