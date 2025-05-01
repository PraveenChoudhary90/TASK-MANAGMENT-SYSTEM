import React, { useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
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
    <div id="home">
    <h1 style={{color:"white"}}>Welcome to Task Managment System</h1>
     {/* <Carousel>
      <Carousel.Item>
        <img src="pic1.webp" alt="" width="2000px"  height="400px" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="pic2.jpeg" alt="" width="2000px"  height="400px" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="pic3.jpeg" alt="" width="2000px"  height="400px"/>
        
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> */}
    </div>
    
    </>
  )
}

export default Home