import React, { Component } from 'react';
import {token$,updatetoken} from './store'
import axios from 'axios'


class profile extends Component{
    constructor(props){
        super(props)
        this.state = {todo:""}
        this.onchange = this.onchange.bind(this)
        this.onclick = this.onclick.bind(this)
    }
    componentDidMount(){
        token$.subscribe((value)=>{console.log(value)})
        console.log(token$)
        axios.get("http://ec2-13-53-32-89.eu-north-1.compute.amazonaws.com:3000/todos",{'headers':{'Authorization': "Bearer " + token$.value }})
        .then((x)=>{console.log(x)})
    }
    onchange(e){
        this.setState({todo:e.target.value})
    }
    onclick(){
        console.log("clicked")
        axios.post("http://ec2-13-53-32-89.eu-north-1.compute.amazonaws.com:3000/todos",{content:this.state.todo},{'headers':{'Authorization': "Bearer " + token$.value }})
        .then((x)=>{console.log(x)})
    }
    render(){
        return(
            <div className="profile--main">
                <div className="profile--add">
                    <input type="text" onChange={this.onchange}/>
                    <button onClick={this.onclick}>ADD</button>
                </div>
            </div>
        )
    }
}
export default profile