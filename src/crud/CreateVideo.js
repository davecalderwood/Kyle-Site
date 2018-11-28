import React, { Component } from 'react';
import ReactModal from 'react-modal';

export default class CreateVideo extends Component {
    constructor () {
      super();
      this.state = {
        video_title: '',
        video_url: '',
        showModal: false,
      };
    }

    handleOpenModal = () => {
      this.setState({ showModal: true });
    }
    
    handleCloseModal = () => {
      this.setState({ showModal: false });
    }

  url = 'http://localhost:4000/video';

  create = async (evt) => {
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
    .then(this.setState({showModal: false}))
    .catch(error => console.error('Error:', error));
    console.log(result)
  }

    render () {
      return (
        <div>
          <button onClick={this.handleOpenModal}>Add Video</button>
          <ReactModal 
             isOpen={this.state.showModal}
             contentLabel="Add Video"
             className="Modal"
          >
            <button onClick={this.handleCloseModal}>X</button>
            <form className="addForm" onSubmit={this.create}>
              <label>
                <input type="text" placeholder="Video Name" 
                onChange={event => this.setState({video_title: event.target.value})} /><br/>
                <input type="text" placeholder="Video URL" 
                onChange={event => this.setState({video_url: event.target.value})}/><br/>
              </label><br/>
              <input type="submit" value="Submit" />
            </form>
          </ReactModal>
        </div>
      );
    }
  }