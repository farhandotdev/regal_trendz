import React from 'react'
import "./Slider.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import  Cloth from "../../assets/cloth.jpg"
import  Cloth2 from "../../assets/cloth2.jpg"

const Slider = () => {
    return (
        <div className='Slidehome'>

            <Carousel className='Carousel-home' showStatus= {false} showArrows ={false} showThumbs = {false} autoPlay ={true} interval={2000} >
                <div className='carousel-image'> 
                    <img src={Cloth2} />
                </div>
                <div className='carousel-image'>
                    <img src={Cloth2} />
                </div>
                <div className='carousel-image'>
                    <img src={Cloth2} />
                </div>
                <div className='carousel-image'>
                    <img src={Cloth2} />
                </div>
            </Carousel>
        </div>
    )
}

export default Slider
