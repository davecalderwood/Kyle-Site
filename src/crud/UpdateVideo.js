import React, { Component } from 'react';
import ReactModal from 'react-modal';

export default class UpdateVideo extends Component {
    constructor (props) {
      super(props);
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

    url = `http://localhost:4000/video/id/${this.props.id}`;

  update = async (evt) => {
    // evt.preventDefault()
      const result = await fetch(this.url, {
      method: 'PUT', 
      body: JSON.stringify({
        video_title: this.state.video_title,
        video_url: this.state.video_url
      }),
    })
    // .then(console.log(this.data))

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
          <button onClick={this.handleOpenModal}>Update Video</button>
          <ReactModal 
             isOpen={this.state.showModal}
             contentLabel="Update Video"
             className="Modal"
          >
            <button onClick={this.handleCloseModal}>X</button>
            <center>
                <h3>Updating the video Name or URL requires both to be updated</h3>
            <form className="addForm" onSubmit={this.update}>
              <label>
                <input type="text" placeholder="Video Name" 
                onChange={event => this.setState({video_title: event.target.value})} required /><br/>
                <input type="text" placeholder="Video URL" 
                onChange={event => this.setState({video_url: event.target.value})} required /><br/>
              </label><br/>
              <input type="submit" value="Submit" />
            </form>
            </center>
          </ReactModal>
        </div>
      );
    }
  }