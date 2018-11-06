import React, { Component } from "react";

class Input extends Component {
    render(){
    return (
        <div className="contact parallax">
        <div className="filler">filler</div>
        <h1>Input video page</h1>
        <div className="information">
            <input type="text" placeholder="Video URL" required></input><br/>
            <input type="text" placeholder="Video Title" required></input><br/>
            <input type="text" placeholder="Description"></input><br/>
            <button className="skills">Add Video</button>
        </div>
        </div>
    )
    }
}

export default Input; 