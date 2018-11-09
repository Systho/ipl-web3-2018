import React from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import {withAuthentication} from 'react/contexts/authentication';
import {withTheme} from 'react/contexts/theme';
import SearchForm from './search_form';


const Navigation = ({ logout, theme }) => {
    return (
        <Navbar bg={ theme } variant={ theme }>
        <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/" >Hello</Nav.Link>
          <Nav.Link as={Link} to="/todo" >Todo</Nav.Link>
          <Nav.Link as={Link} to="/messages" >Messages</Nav.Link>
          <Nav.Link as={Link} to="/login" >Login</Nav.Link>
        </Nav>
       <SearchForm />
       <Button variant="outline-warning" onClick={ logout }>Logout</Button>
      </Navbar>
    );
}


export default withTheme(withAuthentication(Navigation));