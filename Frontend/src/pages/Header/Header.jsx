import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './Header.css';
import { Link } from 'react-router-dom';

const Header =()=>{
    return(
        <>
            <Navbar bg="primary" varient="dark">
                <Container>
                    <Navbar.Brand to="/">Employee Management</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/" className='nav-link'>Employee</Nav.Link>
                        <Nav.Link as={Link} to="/employee" className='nav-link'>Post Employee</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
export default Header;