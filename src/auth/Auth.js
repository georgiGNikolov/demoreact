import React, { Component } from 'react';
import './Auth.css'
import Button from "../UI/button/Button"
import Input from "../UI/input/Input"

class Auth extends Component {

    state = {
        userName: "",
        password: ""
    }

    updateUserName = (event) => {
        this.setState({userName: event.target.value});
    }
    
    updatePassword = (event) => {
        this.setState({password: event.target.value});
    }

    onClicked = () => {
        if(this.state.userName != null 
            && this.state.userName.length > 0
            && this.state.password != null
            && this.state.password.length > 0
            ) {
                this.props.onAuthButtonClicked(this.state.userName, this.state.password);
            }
    }

    formatText = (text) => {
    let newText = text.split("/n").map((item, i) => {
        return <p key={i}>{item}</p>;
        });
        return newText;
    }

    render() {
        return (
            <div className="auth-container">
                <h2 className="auth-header">{this.formatText(this.props.headerText)}</h2>
                <Input type="text" placeholder="Username" onChange={this.updateUserName}/>
                <Input type="password" placeholder="Password" onChange={this.updatePassword}/>
                <Button text = {this.props.buttonText} onClick={this.onClicked}></Button>
            </div>

        );
    }
}

export default Auth;