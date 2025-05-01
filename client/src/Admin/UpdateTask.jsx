import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
function UpdateTask() {
  const [mydata, setMydata] = useState([]);
  const [input, setInput] = useState({});
   
 const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


const loadData = async()=>{
  const api = "http://localhost:8000/admin/TaskDisplay";
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





const HandelDelete =async(_id)=>{
    console.log(_id);
    const api = "http://localhost:8000/admin/deletedata";
    try {
        const response =await axios.post(api, {id:_id});
        alert(response.data.msg);
    } catch (error) {
        console.log(error)
    }
}


const HandelUpdate= async(_id)=>{
   handleShow(true);
        console.log(_id);
        const api = "http://localhost:8000/admin/ShowFromData";
        try {
          const response = await axios.post(api, {id:_id});
          console.log(response.data);
          setInput(response.data);
        } catch (error) {
          console.log(error);
        }
}


const handelInput = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setInput(values=>({...values, [name]:value}));
    console.log(input);

}

 
const handelupdateSubmit =async(e)=>{
    e.preventDefault();
    setShow(false);
    const api = "http://localhost:8000/admin/UpdateTask";
    try {
        const response = await axios.post(api, input);
        console.log(response.data);
        alert(response.data.msg);
    } catch (error) {
        console.log(error);
    }


}





let sno= 0;
 const ans = mydata.map((e)=>{
    sno++;
    return(
        <>
        <tr>
            <td>{sno}</td>
            <td>{e.name}</td>
            <td>{e.title}</td>
            <td>{e.description}</td>
            <td>{e.date}</td>
            <td> <Button variant="danger" onClick={()=>{HandelDelete(e._id)}}>Delete</Button></td>
            <td> <Button variant="primary" onClick={()=>{HandelUpdate(e._id)}}>Update</Button></td>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Task</Modal.Title>
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
      <Button variant="primary" type="submit" onClick={handelupdateSubmit}>
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
      <h1 style={{textAlign:"center"}}>Display Task Page</h1>
       <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sno</th>
          <th>User Name</th>
          <th>Task Title</th>
          <th>Task Description</th>
          <th>Task Date</th>
          <th>Delete</th>
          <th>Update</th>
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

export default UpdateTask