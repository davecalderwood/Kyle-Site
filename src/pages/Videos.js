import React, { Component } from "react";
import DeleteVideo from '../crud/DeleteVideo';
import UpdateVideo from '../crud/UpdateVideo';


const iframeVideo = (props) => {
    return(
        // <iframe width="560" height="315" src={`https://www.youtube.com/embed/${props.video_url}`}  title="title" frameborder="0" allowfullscreen></iframe>
        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${props.video_url}`} title={props.video_title} frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    )
}

export default class Videos extends Component {
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
        else if (this.state.search === ' '){
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
    // searcher refreshes the page after deletion
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
                    {iframeVideo(video.video_url)}
                    {/* embed the video here */}
                    {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/ . stripslashes($row['videourl']) . '" title="title" frameborder="0" allowfullscreen></iframe> */}
                </div>
                <div>
                    <DeleteVideo id={video._id} refresh={this.search}/>
                    <UpdateVideo id={video._id} refresh={this.search}/>
                </div>
            </div>
        )})
    return (
    <div className="home parallax">
        <div className="filler">filler</div>
            <form onSubmit={this.searcher} className="searchbar">
                <input type="search" placeholder="What are you looking for?" onChange={event => this.setState({search: event.target.value})}/><br/>
                {/* <source src="/path/to/video/<?php echo $row_dis[video_path]; ?>" type="video/mp4"></source> */}
            </form>
            <div class="item">

                <h2>{videoName}</h2>

            </div>
            <div>.</div>
            <div>.</div>
            <div>.</div>
            <div>.</div>
    </div>
        );
    }
}
