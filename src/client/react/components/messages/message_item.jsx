import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, ButtonToolbar, Button } from "react-bootstrap";

const MessageItem = ({ message, deleteMessage }) => {
  const detailsPath = `/message/${message._id}`;

  return (
    <Row>
      <Col xs={8}>{message.body}</Col>
      <Col xs={4}>
        <ButtonToolbar>
          <Button variant="outline-primary">
            <Link to={detailsPath}>Détails</Link>
          </Button>

          <Button variant="danger" onClick={() => deleteMessage(message)}>
            Delete
          </Button>
        </ButtonToolbar>
      </Col>
    </Row>
  );
};

export default MessageItem;
