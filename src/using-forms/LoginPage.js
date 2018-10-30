import React, { Component } from "react";
// import Forms from './Forms'


class LoginPage extends Component {
    render(){
    return (
        <div className="logreg">
        <div className="filler">filler</div>
    <form>
    <div className="input-field">
    <h3>Username</h3>
        <label for="userName"></label>
        <input type="text" class="form-control" id="userName" aria-describedby="User" placeholder="Enter your Username here..."></input>
        <small id="userHelp" class="form-text text-muted"></small>
    </div>
    <h3>Password</h3>
    <div className="input-field">
        <label for="exampleInputPassword1"></label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter your password here..."></input>
    </div><br/>

    <button className="button-submit">Submit</button><br/>
    <button className="breathing">Submit</button>
    <h5>sample text</h5>
    <h5>sample text</h5>
    <h5>sample text</h5>
    <h5>sample text</h5>
    <h5>sample text</h5>
    <h5>sample text</h5>
    <h5>sample text</h5>
    <h5>sample text</h5>
    <h5>sample text</h5>
    <h5>sample text</h5>
    </form>

    </div>
    )
    }
}

export default LoginPage; 