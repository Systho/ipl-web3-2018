import React from 'react';
import { Alert } from 'react-bootstrap';

const HelloFromParams = ({
  match: {
    params: {
      name
    }
  },
}) => {
    return (
      <Alert variant='info'>
        Hello { name }
      </Alert>
    );
};

export default HelloFromParams;
