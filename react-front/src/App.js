//import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  componentDidMount() {
    const axios = require('axios');
    axios.get('http://localhost:5000')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  /*componentDidMount() {
    const apiUrl = 'http://localhost:5000';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log('This is your data', data));
  }*/
  render() {
    return <h1>my Component has Mounted, Check the browser 'console' </h1>;
  }
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default App;
