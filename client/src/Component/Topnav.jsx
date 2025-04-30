import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
const Topnav = ()=>{
    return(
        <>
         <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link}   to="home">Task Managment System</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link}  to="home">Home</Nav.Link>
            <Nav.Link as={Link}  to="userlogin">User Login</Nav.Link>
            {/* <Nav.Link  as={Link}  to="displaytask">Admin Login</Nav.Link> */}
            <Nav.Link  as={Link}  to="adminlogin">Admin Login</Nav.Link>
            {/* <Nav.Link  as={Link}  to="updatetask">Update Task</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}

export default Topnav;