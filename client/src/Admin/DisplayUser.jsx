import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
function DisplayUser() {
  const [mydata, setMydata] = useState([]);
  const [input, setInput] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


const loadData = async()=>{
  const api = "http://localhost:8000/admin/userdisplay";
  try {
    const response = await axios.get(api);
    console.log(response.data);
    setMydata(response.data);
  } catch (error) {
    console.log(error)
  }
}

useEffect(()=>{
loadData();
},[])



const handelInput = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setInput(values=>({...values,[name]:value}))
    console.log(input);
  }

  

  const handelSubmit = async(e)=>{
    e.preventDefault();
    const api = "http://localhost:8000/admin/AssignTask";
  try {
    const response = await  axios.post(api,input);
    console.log(response.data);
    setShow(false);
    alert(response.data.msg);
  } catch (error) {
    console.log(error);
  }

  }



let sno =0;
 const ans = mydata.map((e,index)=>{
  sno++;
  return(
    <>
    <tr>
      <td>{sno}</td>
      <td>{e.name}</td>
      <td>{e.email}</td>
      <td>{e.designation}</td>
      <td>{e.number}</td>
      <td><Button variant="primary" onClick={handleShow} >Assign Task</Button></td>
      {localStorage.setItem("_id", e._id)}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Assign Task To User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <Form>
            <Form.Group className="mb-3" controlId="formBasicEmailm">
        <Form.Label>Enter User Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name='name'  value={input.name} onChange={handelInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Title</Form.Label>
        <Form.Control type="text" placeholder="Enter Title" name='title'  value={input.title} onChange={handelInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Description</Form.Label>
        <Form.Control type="text" placeholder="Description" name='description' value={input.description} onChange={handelInput} />
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicPassworda">
        <Form.Label>Enter Due Date</Form.Label>
        <Form.Control type="date" placeholder="Date" name='date' value={input.date} onChange={handelInput} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handelSubmit}>
        Submit
      </Button>
    </Form>
          </Modal.Body>
      </Modal>

        
    </tr>
    
    </>
  )
 })
  return (
    <>
    <div id="table">
      <h1 style={{textAlign:"center"}}>Display user page</h1>
       <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sno</th>
          <th>User Name</th>
          <th>User Email</th>
          <th>User Designation</th>
          <th>phone number</th>
          <th>Assign Task</th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
      </Table>
    </div>
    
    </>
  )
}

export default DisplayUser