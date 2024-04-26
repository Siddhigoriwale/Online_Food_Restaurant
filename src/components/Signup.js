import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
function Signup() {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [phone,setPhone]=useState("")
  const [address,setAddress]=useState("")
  const [password,setPassword]=useState("")
  function adduser(e)
  {
    e.preventDefault()
    let user={name,email,phone,address,password}
    fetch("http://localhost:3000/users",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(user)
    })
  }
  return (
    <div className='container text-start mt-5'>
      <h1 className='text-center mb-4'  style={{ fontFamily: "brush script mt" }}>New User Form</h1>
      <Form onSubmit={adduser}>
        <Form.Group className="mb-3 d-flex justify-content-evenly " controlId="formGroupName">
          <Form.Label as={Col} className='ms-5 ps-5'>User Name</Form.Label>
          <Form.Control  type="text" placeholder="Enter Name" className='w-50 me-5 pe-5' value={name} onChange={(e) => setName(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3 d-flex justify-content-evenly" controlId="formGroupEmail">
          <Form.Label as={Col} className='ms-5 ps-5'>Email address </Form.Label>
          <Form.Control type="email" placeholder="Enter email" className='w-50 me-5 pe-5' value={email} onChange={(e) => setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3 d-flex justify-content-evenly" controlId="formGroupPhone">
          <Form.Label as={Col} className='ms-5 ps-5'>Phone Number</Form.Label>
          <Form.Control type="text" placeholder="Enter Phone Number" className='w-50 me-5 pe-5' value={phone} onChange={(e) => setPhone(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3 d-flex justify-content-evenly " controlId="formGroupCity">
          <Form.Label as={Col} className='ms-5 ps-5'>Enter Address</Form.Label>
          <Form.Control type="text" placeholder="Enter City" className='w-50 me-5 pe-5' value={address} onChange={(e) => setAddress(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3 d-flex justify-content-evenly" controlId="formGroupPassword">
          <Form.Label as={Col} className='ms-5 ps-5'>Enter Password</Form.Label>
          <Form.Control type="password" placeholder="Password" className='w-50 me-5 pe-5' value={password} onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" type="submit" className='mx-auto d-block'>
        Sign Up
      </Button>
      </Form>
    </div>
  )
}

export default Signup