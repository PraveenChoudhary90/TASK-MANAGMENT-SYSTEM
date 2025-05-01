import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function AddUser() {

  const [input, setInput] = useState("");

const handelInput = (e)=>{
  const name= e.target.name;
  const value = e.target.value;
  setInput(values=>({...values, [name]:value}));
  console.log(input);
}
const handleSubmit = async(e)=>{
  e.preventDefault();
  const api = "http://localhost:8000/admin/adduser";
  try {
    const response = await  axios.post(api, input);
    console.log(response.data);
    alert(response.data.msg);
  } catch (error) {
    console.log(error);
  }
}

  return (
    <>
        <div id="from1">
        <h1>New User Registration</h1>
         <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail" >
            <Form.Label>Enter Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" name='name' value={input.name} onChange={handelInput} />
          </Form.Group>
           <Form.Group className="mb-3" controlId="formBasicEmaila">
            <Form.Label>Enter Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" name='email' value={input.email} onChange={handelInput} />
          </Form.Group>
           <Form.Group className="mb-3" controlId="formBasicEmailb">
            <Form.Label>Enter designation</Form.Label>
            <Form.Control type="text" placeholder="Enter Designation" name='designation' value={input.designation} onChange={handelInput} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmailn">
            <Form.Label>Enter Phone No</Form.Label>
            <Form.Control type="text" placeholder="Enter Phone Number" name='number' value={input.number} onChange={handelInput} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name='password' value={input.password} onChange={handelInput} />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
        </div>
    </>
  )
}

export default AddUser