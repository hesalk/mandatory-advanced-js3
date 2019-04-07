import React, { Component } from 'react';

class register extends Component{
    constructor(props){
        super(props)

    }        
    render(){
        return(
            <div className="register-main">
                <h2>Welovme</h2>
                <label htmlFor="username">Username</label>
                <input id="username"  />
                <label htmlFor="username">Passowrd</label>
                <input id="username"  />
            </div>
        )
                    
    }
}
export default register