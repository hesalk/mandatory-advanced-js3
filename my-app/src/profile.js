import React, { Component } from 'react';
import {token$,updatetoken} from './store'
import axios from 'axios'
import jwt from "jsonwebtoken";
import { Redirect } from "react-router-dom";
import data from './data';



class profile extends Component{
    constructor(props){
        super(props)
        this.state = {todos:[],todo:""}
        this.onchange = this.onchange.bind(this)
        this.onclick = this.onclick.bind(this)
        this.delete = this.delete.bind(this)
        this.get = this.get.bind(this)
    }
    get(){
        //const decoded = jwt.decode(test);
        //console.log(decoded)
        axios.get("http://ec2-13-53-32-89.eu-north-1.compute.amazonaws.com:3000/todos",{'headers':{'Authorization': "Bearer " + token$.value }})
        .then((x)=>{
            this.setState({todos:x.data.todos})
        })
    }
    componentDidMount(){
        this.nameInput.focus();
        updatetoken(localStorage.getItem("test"));
        token$.subscribe((value)=>{console.log(value)})
        this.get()
    }
    delete(e){
        let id = e.target.dataset.id
        axios.delete("http://ec2-13-53-32-89.eu-north-1.compute.amazonaws.com:3000/todos/" + id,{'headers':{'Authorization': "Bearer " + token$.value }})
        .then((x)=>{
            this.get()
        })
    }
    onchange(e){
        this.setState({todo:e.target.value})
    }
    onclick(e){
        let code = e.keyCode || e.which;
        if (code === 13 || e.button === 0){
        axios.post("http://ec2-13-53-32-89.eu-north-1.compute.amazonaws.com:3000/todos",{content:this.state.todo},{'headers':{'Authorization': "Bearer " + token$.value }})
        .then((x)=>{
            this.setState({todos:[...this.state.todos,x.data.todo]})
            this.setState({todo:""})
        })
    }
    }
    render(){
        let deletestyle = {
            'paddingLeft':'30px',
            cursor: "pointer"
        }
        return(
            <div className="profile--main">
                <div className="col-6 m-auto">
                    <input ref={(input) => { this.nameInput = input; }} onKeyPress={this.onclick} placeholder="What do you want to" className="form-control" type="text" value={this.state.todo} onChange={this.onchange}/>
                    <button className="btn btn-outline-primary m-2" onClick={this.onclick}>ADD</button>
                </div>
                <div className="todolist">
                {this.state.todos.map(x => 
                <ul className="list-group col-6 m-auto">
                    <li className="list-group-item">
                    <strong>{x.content}</strong>
                    <i data-id={x.id} onClick={this.delete} className="fas fa-trash-alt" style={deletestyle}></i>
                    </li>
                </ul>
                )}
                </div>
            </div>
        )
    }
}
export default profile