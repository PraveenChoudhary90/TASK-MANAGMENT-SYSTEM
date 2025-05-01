import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';



function UserTaskDisplay() {

    const [mydata, setMydata]= useState([]);
   

    
const loadData = async()=>{
  const api = "http://localhost:8000/user/usertaskdisplay";
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

const Panding = ()=>{
    window.alert("Status False :: Your Work Is Not Yet")
}

const Complete = ()=>{
    window.alert("Status True :: Your Work Is Done ")
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
            <td> <Button variant="danger" onClick={Panding}>Panding</Button></td>
            <td> <Button variant="success" onClick={Complete}>Complete</Button></td>
            {/* <td> <Button variant="success" onClick={Status}>Status</Button></td> */}

            
        </tr>
        </>
    )
 })


  return (
    <>
    
        <div id="table1">
          <h1 style={{textAlign:"center"}}>Display Task </h1>
           <Table striped bordered hover>
          <thead>
            <tr>
              <th>Sno</th>
              <th>User Name</th>
              <th>Task Title</th>
              <th>Task Description</th>
              <th>Task Date</th>
              <th>Pending</th>
              <th>Complete</th>
              {/* <th>Status</th> */}
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

export default UserTaskDisplay