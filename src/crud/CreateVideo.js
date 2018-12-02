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
    .then(this.props.refresh())
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
            <center>
            <h4>Remember don't use the entire URL.<br/> Use the tail end between = and &<br/> <br/>
                https://www.youtube.com/watch?v=ZpdLuaX1iCI&t=1s <br/>
                So here use: ZpdLuaX1iCI
            </h4>
              <label>
                <input type="text" placeholder="Video Name" 
                onChange={event => this.setState({video_title: event.target.value})} required /><br/>
                <input type="text" placeholder="Video URL" 
                onChange={event => this.setState({video_url: event.target.value})} required /><br/>
              </label><br/>
              <input type="submit" value="Submit" />
              </center>
            </form>
          </ReactModal>
        </div>
      );
    }
  }