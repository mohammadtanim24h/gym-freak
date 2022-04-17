import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Header.css";
import { signOut } from "firebase/auth";

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="custom-navbar">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        GYM FREAK
                    </Navbar.Brand>
                    <Navbar.Toggle
                        style={{ backgroundColor: "#F99C2E" }}
                        aria-controls="responsive-navbar-nav"
                    />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/home">
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to="/blogs">
                                Blogs
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/about">
                                About me
                            </Nav.Link>
                            {user ? (
                                <button onClick={() => signOut(auth)} className="btn btn-outline-dark">Logout</button>
                            ) : (
                                <Nav.Link as={Link} to="/login">
                                    Login
                                </Nav.Link>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
