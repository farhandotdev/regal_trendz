import React from 'react'
import "./Slider.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Slider = () => {
    return (
        <div className='Slidehome'>

                <Carousel className='Carousel-home'>
                    <div>
                        <img src="https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    </div>
                    <div>
                        <img src="https://images.pexels.com/photos/16170/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    </div>
                    <div>
                        <img src="https://img.freepik.com/free-photo/shop-clothing-clothes-shop-hanger-modern-shop-boutique_1150-8886.jpg?size=626&ext=jpg" />
                    </div>
                    <div>
                        <img src="https://img.freepik.com/free-photo/elegant-woolen-jacket-men-winter-fashion-generated-by-ai_188544-34301.jpg?size=626&ext=jpg" />
                    </div>
                </Carousel>
        </div>
    )
}

export default Slider
