import React, { Component } from 'react';
import axios from 'axios';


class register extends Component{
    constructor(props){
        super(props)
        this.state = {un:'',pw:''}
        this.unchange = this.unchange.bind(this);
        this.pwchange = this.pwchange.bind(this);
        this.onclick = this.onclick.bind(this);
    }
    onclick(){
        console.log('clicked')
        let email = this.state.un
        let password = this.state.pw
        axios.post("http://ec2-13-53-32-89.eu-north-1.compute.amazonaws.com:3000/register",{email,password})
        .then((x)=>{console.log(x)})
    }
    pwchange(e){
        this.setState({pw:e.target.value})
    }
    unchange(e){
        this.setState({un:e.target.value})
    }        
    render(){
        return(
            <div className="register-main">
                <h2>Welovme</h2>
                <label htmlFor="username">username
                <input type="text" id="username" value={this.state.un} onChange={this.unchange} />
                </label>
                <label htmlFor="pw">Passowrd
                <input type="password" id="pw" value={this.state.pw} onChange={this.pwchange} />
                </label>
                <button onClick={this.onclick} />
            </div>
        )
                    
    }
}
export default register