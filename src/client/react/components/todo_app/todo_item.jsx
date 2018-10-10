import React from 'react';
import ListGroup from 'react-bootstrap/lib/ListGroup';

const TodoItem = ({
  text,
}) => {
  return <ListGroup.Item>
    {text}
    </ListGroup.Item>;
}

export default TodoItem;
