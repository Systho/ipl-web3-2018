import React from 'react';
import TodoItem from './todo_item';
import ListGroup from 'react-bootstrap/lib/ListGroup';



const TodoList = ({
  items,
}) => {
  return (
    <ListGroup>
      {items.map(item => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ListGroup>
  );
}

export default TodoList;
