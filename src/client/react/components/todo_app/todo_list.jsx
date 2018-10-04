import React from 'react';
import TodoItem from './todo_item';

const TodoList = ({
  items,
}) => {
  return (
    <ul>
      {items.map(item => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
}

export default TodoList;
