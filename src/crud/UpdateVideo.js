import React, { Component } from 'react';
import VideoForm from '../usingforms/VideoForm';
import Modal from '../usingforms/Modal';
import DeleteVideo from './DeleteVideo';

class VideoShort extends Component {

    render() {
        const video = this.props.video
        const updateText = "Update Video"
        const path = `/id/${video._id}` 
        return (
            <div key={video._id}>
                <div>{video.name}</div>
                <div>{video.url}</div>
                <Modal btnText="Update" title={updateText}>
                    <VideoForm 
                        video={video} 
                        btnText={updateText}
                        action="PUT"
                        path={path}    
                    />
                </Modal>
                <DeleteVideo data={video._id}/>
            </div>
        );
    }
}

export default VideoShort;
