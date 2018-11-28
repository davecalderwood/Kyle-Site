import React, { Component, Fragment } from 'react'
import { videoAPI } from '../usingforms/coms'


export default class extends Component {
    constructor(props) {
        super(props)
        let video;
        if (props.video) {
            video = props.video
        } else {
            video = { 'video title': '', 'video url': '' }
        }
        this.state = {
            name: video.title,
        }
    }

    handleSubmit = (evt) => {
        let path = this.props.path
        if(!path){
            path = ''
        }   
        videoAPI(this.state, this.props.action, path)
    }

    render () {
        return (
            <Fragment>
                <form className="addVid" onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Video Title"
                        value={this.state.name} 
                        onChange={event => this.setState({ name: event.target.value })}
                    />     
                    <input 
                        type="text" 
                        placeholder="Video URL"
                        value={this.state.url} 
                        onChange={event => this.setState({ url: event.target.value })}
                    />
                    <button>{this.props.btnText}</button>   
                </form>
            </Fragment>
        )
    }
}