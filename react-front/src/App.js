import './App.css';
import React from 'react';

export default class App extends React.Component {
  messages = {
    messagess: []
  }
  
  componentDidMount() {
    const axios = require('axios');
    axios.get('http://localhost:5000/')
    .then(response => {
      const messagess = response.data;
      this.setState({ messagess });
      console.log(messagess);
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  
  render() {
    return (
      <div id = "poopy">
        <p>
        { this.messages.messagess.map(messages => <p>{messages.data}</p>)}
        </p>
        <p>poopy butthole</p>
      </div>
    )
  }
}