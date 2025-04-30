import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Addtotask() {
    const [input, setInput] = useState("");

  const handelInput = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setInput(values=>({...values, [name]:value}));
    console.log(input);
  }


    const HandelSubmit = async(e)=>{
        e.preventDefault();
        const api = "http://localhost:8000/addtask/inserttask";
        try {
            const response = await axios.post(api, input)
        } catch (error) {
            
        }

    }
  return (
    <>
    <div id='from'>
        <h1>Add Task From</h1>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Your Title</Form.Label>
        <Form.Control type="text"  name='title' value={input.title} onChange={handelInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmaila">
        <Form.Label>Enter Your Task Decription</Form.Label>
        <Form.Control type="text"  name='description' value={input.description} onChange={handelInput} />
      </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmailb">
        <Form.Label>Enter Due Date</Form.Label>
        <Form.Control type="date"  name='date' value={input.date} onChange={handelInput} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={HandelSubmit}>
        Submit
      </Button>
    </Form>
    </div>
    
    </>
  )
}

export default Addtotask