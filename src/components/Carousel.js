import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Typography } from '@material-ui/core';


export default () => {
    return (
        <div align="center">
            <Carousel showStatus={false} transitionTime={1000} showThumbs={false} autoPlay interval={5000} infiniteLoop>
                <div>
                    <img src="https://source.unsplash.com/1110x400/?landscape" alt="landscape" />
                    <div className="legend">
                        <Typography style={{ color: "white" }}>
                            Legend 1
                    </Typography></div>
                </div>
                <div>
                    <img src="https://source.unsplash.com/1110x400/?nature" alt="landscape" />
                    <div className="legend">
                        <Typography style={{ color: "white" }}>
                            Legend 2
                        </Typography></div>
                </div>
                <div>
                    <img src="https://source.unsplash.com/1110x400/?nightsky" alt="landscape" />
                    <div className="legend">
                        <Typography style={{ color: "white" }}>
                            FLegend 3
                    </Typography></div>
                </div>
            </Carousel>
        </div>
    );
}

