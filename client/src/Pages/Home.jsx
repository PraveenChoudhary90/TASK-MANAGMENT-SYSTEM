import React, { useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Home() {
   

  const navigate = useNavigate();


 const UserAunthenticate=async()=>{

    const token=localStorage.getItem("token");
     if (token)
     {
         let api="http://localhost:8000/user/userauthenticate";

         const response =await axios.get(api, {
          headers: { Authorization: `Bearer ${token}` },
        })
        console.log(response.data);
        localStorage.setItem("username", response.data.name);
        localStorage.setItem("useremail", response.data.email);
        localStorage.setItem("userid", response.data._id);
        navigate("/userdashboard")
     }
   }


useEffect(()=>{
  UserAunthenticate();
},[])



  return (
    <>
    
    <h1>Welcome to home page</h1>
    
    </>
  )
}

export default Home