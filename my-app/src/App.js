import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import register from './register'
import login from './login'
import profile from './profile'
import axios from 'axios'

class App extends Component {
  render() {

    return (
      <Router>
      <div className="App">
        <header className="App-header">
        <Link to="/" >Home</Link>
        <Link to="/resgister" >Resgister</Link>
        <Link to="/login" >Login</Link>
        <Link to="/profile" >profile</Link>

        <Route path="/resgister" exact component={register} />
        <Route path="/login" exact component={login} />
        <Route path="/profile" exact component={profile} />
        </header>
      </div>
      
      </Router>
    );
  }
}

export default App;
