import React, { Component } from 'react';
import {token$,updatetoken} from './store'

class profile extends Component{
    componentDidMount(){
        token$.subscribe((value)=>{console.log(value)})
    }
    render(){
        return(
            <div className="profile--main">
            </div>
        )
    }
}
export default profile