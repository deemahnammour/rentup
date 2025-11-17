import React from "react";
import nav from './../images/nav.png';
import {Navbar , Nav , Container} from 'react-bootstrap';
import './nav.css';

const Navs =()=>{
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className='dor'> <img src={nav} alt="nav" /></Navbar.Brand>
        <Navbar.Toggle className="toggle" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#serviecs">serviecs</Nav.Link>
            <Nav.Link href="#blog">blog</Nav.Link>
            <Nav.Link href="#pricing">pricing</Nav.Link>
            <Nav.Link href="#content">content</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="nav2"><a href="url"><span>2</span>My List</a></div>
        <button>sign in</button>
      </Container>
    </Navbar>


    )
}


export default Navs;