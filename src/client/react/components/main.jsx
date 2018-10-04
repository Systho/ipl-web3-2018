import React from 'react';
import HelloWorld from './hello_world/hello_world';
import TodoAppContainer from './todo_app/todo_app_container';
import TabsContainer from './tabs/tabs_container';
import Tab from './tabs/tab';

class Main extends React.Component {
  render() {
    const myName = 'Bob';

    return (
      <ul>
        <li><HelloWorld name={myName} /></li>
        <li><TodoAppContainer /></li>
        <li>
          <TabsContainer >
            <Tab title="Red" panel={<h3>Red</h3>} />
            <Tab title="Blue" panel={<h3>Blue</h3>} />
            <Tab title="Green" panel={<h3>Green</h3>} />
          </TabsContainer >
        </li>
      </ul>
    );
  }
}

export default Main;
