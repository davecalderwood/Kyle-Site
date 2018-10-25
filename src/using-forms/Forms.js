import React, { Component } from "react";

class Input extends Component {
    render(){
    return (
        <div className="contact parallax">
        <div className="filler">filler</div>
        <h1>Input video page</h1>
        <div className="input">
            <input type="text" placeholder="Video URL"></input><br/>
            <input type="text" placeholder="Video Title"></input><br/>
            <input className="description" type="text" placeholder="Description"></input>
        </div>
        </div>
    )
    }
}

export default Input; 