import React, { Component } from 'react';
import './App.css';
import { css } from 'glamor'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import register from './home'


class App extends Component {
  render() {

    return (
      <Router>
      <div className="App">
        <header className="App-header">
        <Link to="/resgister" >Resgister</Link>
        <Route path="/resgister" exact component={register} />
          
        </header>
      </div>
      
      </Router>
    );
  }
}

export default App;
