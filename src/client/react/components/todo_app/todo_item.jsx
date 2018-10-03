import React from 'react';

class TodoItem extends React.Component {
  render() {
    return <li>{this.props.text}</li>;
  }
}

export default TodoItem;
