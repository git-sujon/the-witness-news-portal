import React from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import LeftSideNav from "../LeftSideNav/LeftSideNav";

const Header = () => {
  const { user, LogOut } = useContext(AuthContext);
  //   console.log(user);

  const signOutHandler = () => {
    LogOut()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <Navbar bg="light" expand="lg" className="py-3">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="text-decoration-none">
              <span className="text-danger fw-bold">The</span>
              <span className="text-warning fw-bold">Witness</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/">All News</Nav.Link>

              <NavDropdown title="Catagories" id="navbarScrollingDropdown">
                <div className="px-3">
                  <LeftSideNav />
                </div>
              </NavDropdown>

              {user  ? (
                <Link className="text-decoration-none ms-5" to="/profile">
                  <div className="ms-5 d-flex border-0 bg-light align-items-center">
                    <img
                      style={{ height: "35px", borderRadius: "50%" }}
                      src={user?.photoURL}
                      alt=""
                    />
                    <p className="mb-0 ms-2 fw-bold text-info">
                      {user?.displayName}
                    </p>
                  </div>
                </Link>
              ) : (
                ""
              )}

              {user  ? (
                <button
                  onClick={signOutHandler}
                  className="btn btn-sm fw-bold ms-3 btn-outline-info"
                >
                  LogOut
                </button>
              ) : (
                <>
                  <Link to='/login'>
                    <button className="btn btn-sm fw-bold ms-3 btn-outline-info">
                      Login
                    </button>
                  </Link>
                  <Link to='/register'>
                    <button className="btn btn-sm fw-bold ms-3 btn-outline-info">
                      SIgnUp
                    </button>
                  </Link>

                </>
              )}
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
