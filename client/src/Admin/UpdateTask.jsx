import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';

function UpdateTask() {
  const [mydata, setMydata] = useState([]);
   


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


  return (
    <>
    <h1>Update Task </h1>
    </>
  )
}

export default UpdateTask