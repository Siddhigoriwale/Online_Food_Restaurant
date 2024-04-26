import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaShoppingCart } from "react-icons/fa";
import { Form } from 'react-bootstrap';
import Catoptions from './Catoptions';

function Menu() {
    const [food, setFood] = useState([])
    const [cart,setCart]=useState([])
    useEffect(() => {
        displayprods()
        cartitems()
        setFood([...food.sort((a,b)=>{return a.price-b.price})]) 
    }, [])
    function displayprods() {
        fetch("http://localhost:3000/fooditems").then((resp1) => {
            resp1.json().then((resp2) => {
                console.log(resp2)
                setFood(resp2)
            })
        })
    }
    const cat = [...new Set(food.map((f) => f.category))]
    console.log(cat)
    function filtercategory(categ) {

        const newfood = food.filter((c1) => c1.category === categ)
        setFood(newfood)

    }

    function cartitems()
    {
      fetch("http://localhost:3000/cart").then((resp1)=>{
        resp1.json().then((resp2)=>{
            console.log(resp2)
            setCart(resp2)
        })
    })
    }

    function addtocart(cartitem)
    { 
      if(cart.some((item)=>item.id===cartitem.id))
      {
        alert("Item already added in the cart")
      }
      else
      {
          fetch("http://localhost:3000/cart",{
            method:"post",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify(cartitem)
        }).then((resp1)=>{
          resp1.json().then((resp2)=>{
            console.log(resp2)
            displayprods()
          })
        })
        window.location.reload()
      } 
    }

    function sortfood(e) {
        if (e.target.value === "LowToHigh") {
            setFood([...food.sort((a, b) => { return a.price - b.price })])
        }
        if (e.target.value === "HighToLow") {
            setFood([...food.sort((a, b) => { return b.price - a.price })])
        }
    }
    return (
        <div className='container-fluid'>
            <h1 className='text-center mt-4' style={{ fontFamily: "brush script mt" }}>Our Menu</h1>
            <div className='row'>
                <div className='col-3 bg-dark text-white fs-5'>
                    <h4 className='mt-5 mb-4'>Get Products By Price</h4>
                    <Form.Select aria-label="Default select example" onChange={(e) => sortfood(e)}>
                        <option>Select Price Option</option>
                        <option value="LowToHigh">Ascending</option>
                        <option value="HighToLow">Desending</option>
                    </Form.Select>
                    <h4 className='mt-5 mb-4'>Get Products By Category</h4>

                    <Catoptions food={food} filtercategory={filtercategory} displayprods={displayprods}/>
                </div>
                <div className='col-9'>
                    <Button variant="dark" className='rounded-pill px-3fs-5 me-4' onClick={() => displayprods()}>All</Button>
                    {

                        cat.map((c) => {
                            return (
                                <Button variant="dark" className='rounded-pill px-3fs-5 me-4' onClick={() => { filtercategory(c) }}>{c}</Button>
                            )
                        })
                    }
                    <div className='row row-cols-1 row-cols-md-3 g-3 mt-5'>
                        {
                            food.map((fd, i) => {
                                return (
                                    <div className='col' key={i}>
                                        <Card style={{ width: '17rem' }} className='h-100  bg-dark text-white border-0 rounded-4'>
                                            <div className='bg-light h-75 p-4 rounded-top-4' style={{ WebkitBorderBottomLeftRadius: "50px" }}>
                                                <Card.Img variant="top" src={fd.image} className='img-fluid mx-auto d-block h-100 w-50' />
                                            </div>
                                            <Card.Body>
                                                <Card.Title>{fd.name}</Card.Title>
                                                <Card.Text>
                                                    Some quick example text to build on the card title and make up the
                                                    bulk of the card's content.
                                                </Card.Text>
                                                <div className='d-flex justify-content-between'>
                                                    <p>${fd.price}</p>
                                                    <Button variant="warning" className='text-white rounded-circle fs-5' onClick={() => { addtocart(fd) }}><FaShoppingCart /></Button>
                                                </div>

                                            </Card.Body>
                                        </Card>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Menu