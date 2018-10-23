import React, { Component } from "react";
// import Forms from './Forms'


class LoginPage extends Component {
    render(){
    return (
        <div className="loginPage">
        <h1>Login</h1>
        <input type="search" required
          id="email"
          pattern="^(([-\w\d]+)(\.[-\w\d]+)*@([-\w\d]+)(\.[-\w\d]+)*(\.([a-zA-Z]{2,5}|[\d]{1,3})){1,2})$"
          placeholder="Your Primary Email Address"
          size="42"/>
            
          <input type="password" required
          id="pass"
          placeholder="Password" />

          <input type="submit"
          ref={(input) => this.input = input} 
          value="Login" />

        </div>
        

        // Not Registered? You can do so here.
    )
    }
}

export default LoginPage; 