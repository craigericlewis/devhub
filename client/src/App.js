import React, { Component } from 'react';

import './App.css';

import Register from './components/auth/Register.js';
import Login from './components/auth/Login.j';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Route exact path="/register" component={Register}/>
          <Route exact path="/login" component={login}/>
        </div>
      </div>
    );
  }
}

export default App;
