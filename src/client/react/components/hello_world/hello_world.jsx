import React from 'react';

class HelloWorld extends React.Component {
  render() {
    const { name } = this.props;

    return (
      <div>
        Hello { name }
      </div>
    );
  }
}



export default HelloWorld;
