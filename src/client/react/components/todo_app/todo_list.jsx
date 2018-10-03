import React from 'react';
import TodoItem from './todo_item';

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <TodoItem key={item.id} text={item.text} />
        ))}
      </ul>
    );
  }
}

export default TodoList;
