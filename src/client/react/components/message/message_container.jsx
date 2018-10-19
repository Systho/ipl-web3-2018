import React from "react";
import MessageComponent from "./message_component";
import sendApiRequest from "react/utils/api";

class MessageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      id: props.match.params.id,
      message: null, 
    };
  }


  fetchMessage(){
    const url = `/api/messages/${this.state.id}`;
    sendApiRequest({ url })
      .then((message) => {
        this.setState({
          message: message,
        })
      })
      .catch((error) => {
        console.error(error);
        this.setState({
          message: [],
        })
      })
  }


  componentDidMount(){
    setTimeout( this.fetchMessage.bind(this), 2000 );
  }

  
  render() {
    return (
      <MessageComponent
        message={this.state.message}
      />
    );
  }
}

export default MessageContainer;
