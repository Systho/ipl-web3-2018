import React from 'react';

import Navbar from 'react-bootstrap/lib/Navbar';
import { withAuthentication } from "react/contexts/authentication.js";


const Navigation = ({ jwt }) => {
    return (
        <Navbar bg="dark" variant="dark" fixed="bottom" >
        <Navbar.Brand>Current JWT : { jwt } </Navbar.Brand>
        
      </Navbar>
    );
}

const NavigationWithAuthentication = withAuthentication(Navigation);
export default NavigationWithAuthentication;