import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet, useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const navigate = useNavigate();
    const Logout = ()=>{
        localStorage.clear();
        navigate("/")
    }
  return (
    <>
    <div id="admin">
    Welcome to Admin Dashboard
    </div>
    <div id="local">
      Admin Name:{localStorage.getItem("name")}<br></br>
      Admin Email:{localStorage.getItem("email")}
    </div>
    <div id="btn">
        <button onClick={Logout}>Logout</button>
    </div>



          <Navbar bg="primary" data-bs-theme="dark" style={{fontWeight:"bold"}}>
        <Container>
          <Navbar.Brand as={Link} to="#">Admin Dashboard</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link  as={Link} to="registration">User Registration</Nav.Link>
            <Nav.Link as={Link}  to="userdisplay">User Display</Nav.Link>
            <Nav.Link href="taskdisplay">Task Display</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div id="data">
      <Outlet/>
      </div>

    
    </>
  )
}

export default AdminDashboard