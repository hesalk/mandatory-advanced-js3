import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";


class register extends Component{
    constructor(props){
        super(props)
        this.state = {un:'',pw:'',redirect:false}
        this.unchange = this.unchange.bind(this);
        this.pwchange = this.pwchange.bind(this);
        this.onclick = this.onclick.bind(this);
    }
    onclick(){
        let email = this.state.un
        let password = this.state.pw
        axios.post("http://ec2-13-53-32-89.eu-north-1.compute.amazonaws.com:3000/register",{email,password})
        .then((x)=>{
            this.setState({redirect:true})
        })
        .catch((x)=>{alert("Something went wrong, please try agin")})
    }
    pwchange(e){
        this.setState({pw:e.target.value})
    }
    unchange(e){
        this.setState({un:e.target.value})
    }        
    render(){
        if(this.state.redirect){
            return <Redirect to="/login" />
        }
        return(
            <div className="register-main">
                <div class="alert alert-info" role="alert">
                    Log in if you have an account or sign up for a new one
                </div>
                <h2>Welcome</h2>
                <h5>Pleas enter a username and passowrd to sign up</h5>
                <div className="col-3 m-auto">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                         <span className="input-group-text" id="basic-addon1">@</span>
                        </div>
                        <input placeholder="Username" type="text" className="form-control" id="username" value={this.state.un} onChange={this.unchange} />
                    </div>
                <input type="password" placeholder="Password" className="form-control" id="pw" value={this.state.pw} onChange={this.pwchange} />
                <button className="btn btn-outline-primary mt-2" onClick={this.onclick}>Sign up</button>
                </div>
            </div>
        )
                    
    }
}
export default register