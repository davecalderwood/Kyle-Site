import React, { Component } from 'react';
import { videoAPI } from '../usingforms/coms'

class DeleteVideo extends Component {

    handleDelete = async (event) => { 
        const path = `/id/${this.props.data}`
        videoAPI({}, 'DELETE', path)
    }

  url = 'http://localhost:4000/video';

  delete = async (evt) => {
    evt.preventDefault()
      const result = await fetch(this.url, {
      method: 'POST', 
      body: JSON.stringify({
        video_title: this.state.video_title,
        video_url: this.state.video_url
      }),
    })
    .then(console.log(this.data))
    .then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));
    console.log(result)
  }

    render() {
        return (
            <form onSubmit={this.handleDelete}>
                <button>Delete</button>
            </form>
        );
    }
}

export default DeleteVideo;