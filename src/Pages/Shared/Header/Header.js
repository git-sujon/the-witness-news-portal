import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link} from 'react-router-dom';
import  { AuthContext } from '../../../contexts/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {

    const {email} = useContext(AuthContext)
    // console.log(email )

    return (
        <>
            <Navbar      bg="light" expand="lg">
                <Container >
                 <Navbar.Brand><Link to='/' className='text-decoration-none'><span className='text-danger fw-bold'>The</span> <span  className='text-warning fw-bold'>Witness</span></Link> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav
                            className="me-auto "  >
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/">All News</Nav.Link>


                            <NavDropdown title="Catagories" id="navbarScrollingDropdown">

                                <div className='px-3'><LeftSideNav /></div>

                            </NavDropdown>

                            <button className='ms-5'>{email}</button>

                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <br />

        </>
    );
};

export default Header;