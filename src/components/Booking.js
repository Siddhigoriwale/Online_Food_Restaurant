import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

function Booking() {
  return (
    <div>
      <Container className='mt-5'>
        <h1 className='text-start' style={{ fontFamily: "brush script mt" }}>Book A Table</h1>
        <Row>
          <Col>
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1" className='mb-3'>
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlInput2" className='mb-3'>
                <Form.Control type="text" placeholder="Phone Number" />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlInput3" className='mb-3'>
                <Form.Control type="email" placeholder="Your Email" />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlSelect1" className='mb-3'>

                <Form.Control as="select">
                  <option className='disabled' style={{color:'#999'}}>How Many Persons</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlInput4" className='mb-3'>
                <Form.Control type="date" />
              </Form.Group>

              <Button variant="warning" className='text-white fs-5 px-5 mt-4 rounded-pill float-start'>Book Now</Button>
            </Form>
          </Col>
          <Col>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15666319.32023794!2d55.86261815!3d16.5369489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0fbd0bc3bca31%3A0x7e3520fffa008bf5!2sPizza%20Hut!5e0!3m2!1sen!2sin!4v1711084767298!5m2!1sen!2sin" width="600" height="400" style={{ border: 2 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Booking