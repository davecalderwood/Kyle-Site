import React, { Component } from 'react';
import CreateVideo from '../crud/CreateVideo';
// import DeleteVideo from '../crud/DeleteVideo';
// import UpdateVideo from '../crud/UpdateVideo';

export default class ManageVideo extends Component {

    grabVideo = async () => {
        await fetch('http://localhost:4000/video')
            .then(res => res.json())
            .then(data => this.setState({video: data}))
        console.log('all results: ', this.state.video)
    }
    render() {
        // const video = this.props.video
        // const updateText = "Update Video"
        // const path = `/id/${video._id}`
        
        return (
            <div>
                <CreateVideo />
                {/* <DeleteVideo /> */}
                {/* <UpdateVideo /> */}
                <form>
                    <input type="search" placeholder="What are you looking for?"></input>
                </form>
            </div>
        );
    }
}
