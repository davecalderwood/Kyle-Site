import React, { Component } from 'react'


class Forms extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(i) {
    alert('The value is: ' + this.input.value);
    i.preventDefault();
  }
  render() {
    const form = (pureForm) => {
      console.log(pureForm)
    }
    return ( 
      // registration form
      <form class="pureForm">
      <label><br/>
      <input type="search" required
          id="fName"
          placeholder="First Name"
      />
      <input type="search" required
          id="lName"
          placeholder="Last Name"
      /><br/>
      <input type="search" required
          id="email"
          pattern="^(([-\w\d]+)(\.[-\w\d]+)*@([-\w\d]+)(\.[-\w\d]+)*(\.([a-zA-Z]{2,5}|[\d]{1,3})){1,2})$"
          placeholder="Your Primary Email Address"
          size="42"
      />
      </label><br/>
      <input type="number" required
          id="age"
          placeholder="Age"
          min="0"
      />
      <input type="tel" required
          id="phone"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
          placeholder="Phone #, use dashes"
      /><br/><br/>
      {/* Passwords and submit button */}
      <input type="password" required
          id="pass"
          placeholder="Password" 
      /><br/>
      <input type="password" required
          id="pass2"
          placeholder="Confirm Password"
      /><br/>
      <input type="submit"
          ref={(input) => this.input = input} 
          value="Register" 
      /><br/><br/>
      </form>
      );
    }
    onChange (event) {
        console.log(event.target.fName);
        console.log(event.target.lName);
      }
}
export default Forms;