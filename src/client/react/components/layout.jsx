import React, { Component } from 'react'
import { Container, Row, Col } from "react-bootstrap";

import Navigation from "./navigation/navigation";
import RouterOutler from "./router_outlet";
import Footer from "./footer/footer";

export class Layout extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <Navigation />

          <Container>
            <Row>
              <Col xs={2} />
              <Col xs={8}>
                <RouterOutler />
              </Col>
              <Col xs={2} />
            </Row>
          </Container>

          <Footer />
          
        </React.Fragment>
      </div>
    )
  }
}

export default Layout
