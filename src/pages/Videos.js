import React, { Component } from "react";
// import Card from '../usingforms/Card';
import DeleteVideo from '../crud/DeleteVideo';

class Videos extends Component {
    state = {
        video: [],
        search: ''
    }
    
    // Get all videos
    grabVideo = async () => {
        await fetch('http://localhost:4000/video')
            .then(res => res.json())
            .then(data => this.setState({video: data}))
        console.log('all results: ', this.state.video)
    }

    componentDidMount = async () => {
        await this.grabVideo()
    }

    // Search for a specific video(s)
    search = async () => {
        if (this.state.search === ''){
            this.grabVideo()
        }
            else {
                const trimmed = this.state.search.replace(/\s/, "")
                console.log(trimmed)
                await fetch(`http://localhost:4000/video/name/${trimmed}`)
                    .then(res => res.json())
                    .then(data => this.setState({ video: data }))
                console.log("search: ", this.state.video)
            }
    }
    searcher = (event) => {
        event.preventDefault()
        this.search()
    }

    render(){
        const videoName = this.state.video.map((video) => {
            return (
            <div key={video._id}>
                <div>
                    {video.video_title}
                </div>
                <div>
                    {/* embed the video here */}
                    {video.video_url}
                </div>
                <div>
                    <DeleteVideo id={video._id} refresh={this.search}/>
                </div>
            </div>
        )})


        // const videoURL = this.state.video.map(videos => videos.video_url)
        // const URL = videoURL.replace("watch?v=", "embed/")
        // console.log(videoURL.toString())
        // URL to string
        // const stringURL = videoURL.toString()
        // const embed = stringURL.replace('watch?v=', 'embed/')
        // const arrayURL = embed.split(",")
        // console.log(embed)

    return (
        <div className="home parallax">
        {/* <div className="filler">filler</div> */}
            <form onSubmit={this.searcher}>
                <input type="text" onChange={event => this.setState({search: event.target.value})}/>
                <input className="skills" type="submit" value="Search"/>
            </form>
            <h2>{videoName}</h2>
            {/* <Card /> */}
            {/* <iframe width="560" height="315" src={videoURL} frameborder="0" title="UVU Player Profile 01 | Brianna Moeller"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
        </div>
        );
    }
}

export default Videos; 