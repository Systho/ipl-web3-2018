import React from 'react';

import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import { Link } from 'react-router-dom';
import SearchForm from './search_form';


const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/" >Hello</Nav.Link>
          <Nav.Link as={Link} to="/todo" >Todo</Nav.Link>
          <Nav.Link as={Link} to="/messages" >Messages</Nav.Link>
        </Nav>
       <SearchForm />
      </Navbar>
    );
}


export default Navigation;