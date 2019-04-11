import React, { Component } from 'react';
import axios from 'axios'
import {token$,updatetoken} from './store'
import data from './data';
import { Redirect } from "react-router-dom";


class login extends Component{
    constructor(props){
        super(props)
        this.state = {un:'',pw:'',in:false}
        this.unchange = this.unchange.bind(this);
        this.pwchange = this.pwchange.bind(this);
        this.onclick = this.onclick.bind(this);
    }
    componentDidMount(){
        this.nameInput.focus();
      }
    onclick(){
        let email = this.state.un
        let password = this.state.pw
        axios.post("http://ec2-13-53-32-89.eu-north-1.compute.amazonaws.com:3000/auth",{email,password})
        .then((x)=>{
            if(x.status === 200){
                data.tok = true
                let newtoken = x.data.token;
                updatetoken(newtoken);
                this.setState({in:true})
                window.location.reload()
            }
        })
        .catch((error)=> {
            // handle error
            console.log(error);
            this.setState({un:"",pw:""})
            alert("Username or passowrd wrong try agin")
          })

    }
    pwchange(e){
        this.setState({pw:e.target.value})
    }
    unchange(e){
        this.setState({un:e.target.value})
    } 
    render(){
        if(this.state.in){
            return <Redirect to="/profile" />
        }
        return(
            <div className="register-main">
            <h2>Login</h2>
                <div className="col-3 m-auto">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                         <span className="input-group-text" id="basic-addon1">@</span>
                        </div>
                        <input ref={(input) => { this.nameInput = input; }} className="form-control" type="text" id="username" value={this.state.un} onChange={this.unchange} />
                    </div>
            <input placeholder="Password" className="form-control" type="password" id="pw" value={this.state.pw} onChange={this.pwchange} />
            <button className="btn btn-outline-primary mt-2" onClick={this.onclick}>Login</button>
            </div>
        </div>
        )
    }
}

export default login