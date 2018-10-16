import React from "react";
import MessagesComponent from "./messages_component";

class MessagesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };

    this.deleteMessage = this.deleteMessage.bind(this);
  }


  fetchMessages(){
    fetch("/api/messages")
      .then((response) => { return response.json() })
      .then((messages) => {
        this.setState({
          messages: messages,
        })
      })
      .catch((error) => {
        console.error(error);
        this.setState({
          messages: [],
        })
      })
  }

  deleteMessage(message){
    const url = `/api/messages/${message._id}`
    fetch(
        url,
        {
          method: "DELETE",
        }
        )
      .then((_ignored) => {
        const {messages} = this.state;

        const messageIndex = messages.indexOf(message);
        if (messageIndex > -1) {
          messages.splice(messageIndex, 1);
        }
        this.setState({
          messages: messages,
        })
      })
      .catch((error) => {
        console.error(error);
        this.setState({
          messages: [],
        })
      })
  }

  componentDidMount(){
    this.fetchMessages()
  }

  
  render() {
    return (
      <MessagesComponent
        messages={this.state.messages}
        deleteMessage={this.deleteMessage}
      />
    );
  }
}

export default MessagesContainer;
