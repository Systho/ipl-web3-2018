import React from "react";

import { Navbar, Nav, Button } from "react-bootstrap";
import { withAuthentication } from "react/contexts/authentication";
import { withTheme } from "react/contexts/theme";

const Navigation = ({ jwt, theme, toggleTheme }) => {
  return (
    <Navbar bg={theme} variant={theme} fixed="bottom">
      <Nav className="mr-auto">
        <Navbar.Brand>Current JWT : {jwt} </Navbar.Brand>
      </Nav>
      <Button variant="outline-info" onClick={toggleTheme}>
        Change Theme
      </Button>
    </Navbar>
  );
};

const NavigationWithAuthentication = withAuthentication(Navigation);
const NavigationWithAuthenticationAndTheme = withTheme(
  NavigationWithAuthentication
);
export default NavigationWithAuthenticationAndTheme;
