import React, { Component } from "react";

class Input extends Component {
    render(){
    return (
        <div className="contact parallax">
        <div className="filler">filler</div>
        <h1>Input video page</h1>
        <div className="information">
            <input type="text" placeholder="Video URL"></input><br/>
            <input type="text" placeholder="Video Title"></input><br/>
            <input type="text" placeholder="Description"></input><br/>
            <button className="button-submit">Submit</button>
            <button className="skills">Skills</button>
        </div>
        </div>
    )
    }
}

export default Input; 