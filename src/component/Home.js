import React, { Component } from "react";

class Home extends Component {
    state = {
        video: [],
        search: ''
    }
    
    grabVideo = async () => {
        await fetch('http://localhost:4000/video')
            .then(res => res.json())
            .then(data => this.setState({video: data}))
        console.log('all results: ', this.state.video)
    }
    componentDidMount = async () => {
        await this.grabVideo()
    }
    search = async (event) => {
        event.preventDefault()
        // console.log("Search: ", this.state.search)
        await fetch('http://localhost:4000/video/name/' + this.state.search)
            .then(res => res.json())
            .then(data => this.setState({ video: data }))
        console.log("search: ", this.state.video)
    }
    render(){
        console.log("state.video: ", this.state.video)
        const videoName = this.state.video.map(videos => videos.video_title)
        console.log(videoName)
    return (
        <div className="home parallax">
        <div className="filler">filler</div>
            <h1>{videoName}</h1>

            <form onSubmit={this.search}>
                    <input type="text" onChange={event => this.setState({search: event.target.value})}/>
                    <input type="submit" value="Search"/>
                </form>
        </div>
    )
    }
}

export default Home; 