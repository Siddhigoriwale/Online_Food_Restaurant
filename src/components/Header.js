import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
function Header() {
    let login=localStorage.getItem("login")
    const [cart,setCart]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        fetch("http://localhost:3000/cart").then((resp1)=>{
            resp1.json().then((resp2)=>{
                console.log(resp2)
                setCart(resp2)
            })
        })
    },[])
    function handleSearch(s)
    {
        navigate("/Search",{state:{s:s}})
    }
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home" className='fs-2' style={{fontFamily: "brush script mt"}}>Feane</Navbar.Brand>
                    <Nav className="align-items-center ">
                        <Nav.Link href="/">HOME</Nav.Link>
                        <Nav.Link href="/Menu">MENU</Nav.Link>
                        <Nav.Link href="/About">ABOUT</Nav.Link>
                        <Nav.Link href="/Booking">BOOK A TABLE</Nav.Link>                        
                        <Nav.Link href="/Signup">SIGNUP</Nav.Link>
                        {login? <Nav.Link href="/Signout">SIGNOUT</Nav.Link> : <Nav.Link href="/Signin">SIGNIN</Nav.Link>}                        
                        <Nav.Link href="#Search">
                            <Form.Control
                                type="text"
                                placeholder="Search"
                                className=" mr-sm-2"
                                onChange={(e)=>handleSearch(e.target.value)}
                            />
                        </Nav.Link>
                        <Nav.Link href="/Cart" className='fs-4'><FaCartShopping /><sup>{cart.length}</sup></Nav.Link>
                    </Nav>
                </Container>
                
            </Navbar>
            
        </div>
    )
}

export default Header