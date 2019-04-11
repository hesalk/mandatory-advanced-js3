import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import register from './register'
import login from './login'
import profile from './profile'
import axios from 'axios'
import {token$,updatetoken} from './store'
import { Redirect } from "react-router-dom";
import jwt from "jsonwebtoken";


class App extends Component {
  constructor(props){
    super(props)
    this.state = {token:"",logstyle:{display:"inline"},logvalue:"Login",redirect:false,un:""}
    this.log = this.log.bind(this)
  }
  componentDidMount(){

    token$.subscribe((value)=>{console.log(value)})
    if(token$.value !== null){
      this.setState({logvalue:"logout"})
      const decoded = jwt.decode(token$.value);
      console.log(decoded)
      this.setState({un:decoded})
    }else{
      this.setState({un:""})
    }
  }

  log(){
    if(token$.value === null){
      this.setState({logvalue:"Login"})
      return
    }
    else{
      updatetoken(null)
      window.location.reload()
    }
    //updatetoken(null)
    //this.forceUpdate()
  }
  render() {
    console.log("renderapp")

    let navstyle = {
      backgroundColor: "black",
      marginBottom: "24px"
    }

    let goldtxt = {
      color:"goldenrod"
    }
    return (
      <Router>
        
      <div className="App">
      <nav className="navbar navbar-expand-lg" style={navstyle} >
            <Link to="/resgister" className="nav--maintxt navbar-brand" style={goldtxt}>Monster ToDo</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="Gold navbar-toggler-icon"><i className="fas fa-bars"></i></span>
                </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                              <Link to="/resgister" className="nav-link" style={goldtxt} >Home</Link>
                            </li>
                            <li>
                            </li>
                            <li>
                            <Link to="/profile" className=" nav-link"style={goldtxt} >profile</Link>
                            </li>
                        </ul>
                        <span className="navbar-text" style={{color:"white"}}>
                           {this.state.un.email} Welcome to Monster ToDo App 
                        </span>
                        <button type="button" onClick={this.log} className="btn btn-light ml-4" style={this.state.logstyle}>
                          <Link className=" nav-link"to="/login">{this.state.logvalue}</Link>
                        </button>
                    </div>
            </nav>
{/*         <Link to="/" >Home</Link>
        <Link to="/resgister" >Resgister</Link>
        <Link to="/login" >Login</Link>
        <Link to="/profile" >profile</Link> */}
        <Route path="/" exact component={register} />
        <Route path="/resgister" exact component={register} />
        <Route path="/login" exact component={login} />
        <Route path="/profile" exact component={profile} />
        
      </div>
      
      </Router>
      
    );
  }
}

export default App;
