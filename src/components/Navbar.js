import React from "react";
import { Link } from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon, faSun} from "@fortawesome/free-regular-svg-icons";

export default function Navbars(){
    return(
    <Navbar expand="lg" className="navbarCustom">
      <Container>
        <Navbar.Brand id="logo" as={Link} to="/">news 24X7</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/national">National</Nav.Link>
            <Nav.Link as={Link} to="/business">Business</Nav.Link>
            <Nav.Link as={Link} to="/sports">Sports</Nav.Link>
            <Nav.Link as={Link} to="/world">World</Nav.Link>
            <Nav.Link as={Link} to="/politics">Politics</Nav.Link>
            <Nav.Link as={Link} to="/technology">Technology</Nav.Link>
            <Nav.Link as={Link} to="/startup">Startup</Nav.Link>
            <Nav.Link as={Link} to="/entertainment">Entertainment</Nav.Link>
            <Nav.Link as={Link} to="/miscellaneous">Miscellaneous</Nav.Link>
            <Nav.Link as={Link} to="/hatke">Hatke</Nav.Link>
            <Nav.Link as={Link} to="/science">Science</Nav.Link>
            <Nav.Link as={Link} to="/automobile">Automobile</Nav.Link>
          </Nav>
          <Navbar.Text id="themeLogo" style={{ marginRight: "25px" }}>
            <FontAwesomeIcon icon={"light" ? faMoon : faSun} />
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}