import React from "react";
import {Jumbotron} from 'react-bootstrap';
import { CircleLoader } from "react-spinners";


const MessageComponent = ({
  message,
}) => {
  return (
    <Jumbotron>
      <h3>Messages</h3>
      { !message &&
        <CircleLoader 
        />
      }
      { message && 
        <p>
          { message.body }
        </p>
      }
    </Jumbotron>
  );
};

export default MessageComponent;
