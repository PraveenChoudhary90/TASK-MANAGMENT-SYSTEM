import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function AddUser() {
  return (
    <>
        <div id="from1">
        <h1>New User Registration</h1>
         <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail" >
            <Form.Label>Enter Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" />
          </Form.Group>
           <Form.Group className="mb-3" controlId="formBasicEmaila">
            <Form.Label>Enter Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" />
          </Form.Group>
           <Form.Group className="mb-3" controlId="formBasicEmailb">
            <Form.Label>Enter designation</Form.Label>
            <Form.Control type="text" placeholder="Enter Designation" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmailb">
            <Form.Label>Enter Phone No</Form.Label>
            <Form.Control type="text" placeholder="Enter Phone Number" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </div>
    </>
  )
}

export default AddUser