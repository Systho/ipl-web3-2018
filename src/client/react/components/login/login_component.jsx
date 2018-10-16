import React from 'react';
import { 
    Container, 
    Row, 
    Col, 
    Form, 
    Button, 
} from 'react-bootstrap';


const LoginComponent = ({
    email,
    password,

    authenticate,
    onFieldChange,
}) => {

    return (
        <Container>
        <Row>
          <Col xs={{span: 8, offset: 2}} style={{marginTop: "200px"}}>
          <Form onSubmit={authenticate}>
            <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                Email
                </Form.Label>
                <Col sm={10}>
                <Form.Control name="email" type="email" placeholder="Email" value={email} onChange={onFieldChange}/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                Password
                </Form.Label>
                <Col sm={10}>
                <Form.Control name="password" type="password" placeholder="Password" value={password} onChange={onFieldChange}/>
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit">Sign in</Button>
                </Col>
            </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    );
};

export default LoginComponent;