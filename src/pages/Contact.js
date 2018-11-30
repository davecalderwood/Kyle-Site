import React, { Component } from "react";

export default class Contact extends Component {
    render(){
    return (

        <div className="contact parallax">
        <div className="filler">filler</div>
        <h1>This is the Contact page.</h1>
        <a
                className="developer"
                href="mailto:davidhcalderwood@gmail.com">
                <div>
                  <button>Contact Developer</button>
                </div>
        </a>
        </div>
    )
    }
}
