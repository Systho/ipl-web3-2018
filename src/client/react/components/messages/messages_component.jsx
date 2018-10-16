import React from "react";
import {Container, ListGroup} from 'react-bootstrap';
import MessageItem from './message_item';


const MessagesComponent = ({
  messages,
  deleteMessage,
}) => {
  return (
    <Container>
      <h3>Messages</h3>
      <ListGroup>
        {
          messages.map(( message, i )=> (
            <ListGroup.Item key={i} >
              <MessageItem message={message} deleteMessage={deleteMessage} />
            </ListGroup.Item>
          ))
        }
      </ListGroup>
    </Container>
  );
};

export default MessagesComponent;
