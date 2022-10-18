import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {
    return (
        <>
            <Navbar      bg="light" expand="lg">
                <Container >
                    <Navbar.Brand href="#">THe Witness</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav
                            className="me-auto "  >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">All News</Nav.Link>


                            <NavDropdown title="Catagories" id="navbarScrollingDropdown">

                                <div className='px-3'><LeftSideNav /></div>

                            </NavDropdown>

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