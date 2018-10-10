import React from 'react';
import { Alert } from 'react-bootstrap';

const HelloWorldFunctional = ({
  name,
}) => {
    return (
      <Alert variant='info'>
        Hello { name }
      </Alert>
    );
};

export default HelloWorldFunctional;
