import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import { FaCartShopping } from "react-icons/fa6";
import About from './About';
import Customers from './Customers';
import Booking from './Booking';

function Home() {
    return (
        <div>
            <Carousel className='bgimage text-white p-5'>
                <Carousel.Item>
                    <div className='w-50 text-start p-4 ms-5 mt-5 mb-5'>
                        <h1 className='display-3' style={{ fontFamily: "brush script mt" }}>Fast Food Restaurant</h1>
                        <p className='fs-5'>Doloremque, itaque aperiam facilis rerum, commodi,
                            temporibus sapiente ad mollitia laborum quam quisquam esse error unde.
                            Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil
                            ducimus libero ipsam.
                        </p>
                        <Button variant="warning" className='text-white fs-5 px-4 rounded-pill mt-4'>Order Now</Button>
                    </div>

                </Carousel.Item>
                <Carousel.Item>
                    <div className='w-50 text-start p-4 ms-5 mt-5 mb-5'>
                        <h1 className='display-3' style={{ fontFamily: "brush script mt" }}>Fast Food Restaurant</h1>
                        <p className='fs-5'>Doloremque, itaque aperiam facilis rerum, commodi,
                            temporibus sapiente ad mollitia laborum quam quisquam esse error unde.
                            Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil
                            ducimus libero ipsam.
                        </p>
                        <Button variant="warning" className='text-white fs-5 px-4 rounded-pill mt-4'>Order Now</Button>
                    </div>

                </Carousel.Item>
                <Carousel.Item>
                    <div className='w-50 text-start p-4 ms-5 mt-5 mb-5'>
                        <h1 className='display-3' style={{ fontFamily: "brush script mt" }}>Fast Food Restaurant</h1>
                        <p className='fs-5'>Doloremque, itaque aperiam facilis rerum, commodi,
                            temporibus sapiente ad mollitia laborum quam quisquam esse error unde.
                            Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil
                            ducimus libero ipsam.
                        </p>
                        <Button variant="warning" className='text-white fs-5 px-4 rounded-pill mt-4'>Order Now</Button>
                    </div>

                </Carousel.Item>
            </Carousel>
            <Container>
            <div className='row mt-5'>
                <div className='col'>
                    <div className='row bg-dark text-white '>
                        <div className='col-4 p-4'>
                            <img src='./images/o1.jpg' className='rounded-circle border border-warning border-4 h-100 w-100 image1' alt=''/>
                        </div>
                        <div className='col-8 p-2 text-start'>
                            <h1 style={{fontFamily:"brush script mt"}}>Tasty Thursdays</h1>
                            <h1 style={{fontFamily:"brush script mt"}}>20% <span className='fs-4'>Off</span></h1>
                            <Button variant="warning" className='text-white fs-5 px-4 rounded-pill'>Order Now <FaCartShopping /></Button>
                        </div>
                    </div>
                </div>
                
                <div className='col ms-5'>
                <div className='row bg-dark text-white '>
                        <div className='col-4 p-4'>
                            <img src='./images/o2.jpg' className='rounded-circle border border-warning border-4 h-100 w-100 image1' alt=''/>
                        </div>
                        <div className='col-8 p-2 text-start'>
                            <h1 style={{fontFamily:"brush script mt"}}>Pzza Days</h1>
                            <h1 style={{fontFamily:"brush script mt"}}>15% <span className='fs-4'>Off</span></h1>
                            <Button variant="warning" className='text-white fs-5 px-4 rounded-pill'>Order Now <FaCartShopping /></Button>
                        </div>
                    </div>
                </div>
            </div>
            </Container>
            <About/>
            <Booking/>
            <Customers/>
        </div>
    )
}

export default Home