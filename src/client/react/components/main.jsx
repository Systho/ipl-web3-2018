import React from 'react';
import HelloWorld from './hello_world/hello_world';
import TodoApp from './todo_app/todo_app';

class Main extends React.Component {
  render() {
    const myName = 'Bob';

    return (
      <ul>
        <li><HelloWorld name={myName} /></li>
        <li><TodoApp /></li>
      </ul>
    );
  }
}

export default Main;
