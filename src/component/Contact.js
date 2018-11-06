import React, { Component } from "react";

class Contact extends Component {
    render(){
    return (

        <div className="contact parallax">
        <div className="filler">filler</div>
        <h1>This is the Contact page.</h1>
        <a
                className="developer"
                href="mailto:davidhcalderwood@gmail.com">
                <div>
                  <h3>Contact Developer</h3>
                </div>
        </a>
        </div>
    )
    }
}

export default Contact; 