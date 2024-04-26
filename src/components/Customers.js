import React, { useRef } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";


function Customers() {
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        cssEase: "linear"
    };
    return (
        <div className='mt-5'>
            <h1 style={{ fontFamily: "brush script mt" }}>What Says Our Customer</h1>
            <div className="slider-container ">
                <Slider ref={slider => {
                    sliderRef = slider;
                }} {...settings}>
                    <div className='p-4'>
                        <div className='bg-dark text-white p-3'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            <h5>Moana Michell</h5>
                            <p>Magna Aliqua</p>
                        </div>
                        <img src='./images/client1.jpg' alt='' className='img-fluid mx-auto d-block rounded-circle mt-3 h-25 w-25 border border-warning border-4' h-25 w-25 border float-start />
                    </div>
                    <div className='p-4' >
                        <div className='bg-dark text-white p-3'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            <h5>Mike Hamell</h5>
                            <p>Magna Aliqua</p>
                        </div>
                        <img src='./images/client2.jpg' alt='' className='img-fluid mx-auto d-block rounded-circle mt-3 h-25 w-25 border border-warning border-4' h-25 w-25 border float-start />
                    </div>
                    <div className='p-4'>
                        <div className='bg-dark text-white p-3'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            <h5>Moana Michell</h5>
                            <p>Magna Aliqua</p>
                        </div>
                        <img src='./images/client1.jpg' alt='' className='img-fluid mx-auto d-block rounded-circle mt-3 h-25 w-25 border border-warning border-4' h-25 w-25 border float-start />
                    </div>
                    <div className='p-4'>
                        <div className='bg-dark text-white p-3'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            <h5>Mike Hamell</h5>
                            <p>Magna Aliqua</p>
                        </div>
                        <img src='./images/client2.jpg' alt='' className='img-fluid mx-auto d-block rounded-circle mt-3 h-25 w-25 border border-warning border-4' h-25 w-25 border float-start />
                    </div>
                </Slider>
                <FaChevronCircleLeft className='text-warning fs-1 me-2' onClick={previous} />
                <FaChevronCircleRight className='text-warning fs-1' onClick={next} />
            </div>
        </div>
    )
}

export default Customers