import React, { Component } from 'react';

export default class DeleteVideo extends Component {

  url = `http://localhost:4000/video/id/${this.props.id}`;

  delete = async (evt) => {
    evt.preventDefault()
      const result = await fetch(this.url, {
      method: 'DELETE', 
    })
    .then(console.log(this.data))
    .then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));
    console.log(result)
    this.props.refresh()
  }

    render() {
        return (
            <form onSubmit={this.delete}>
                <button>Delete</button>
            </form>
        );
    }
}
