import "./PlayList.css";

import React, { Component } from "react";

import TrackList from "../TrackList/TrackList";

export default class PlayList extends Component {
    constructor(props) {
      super(props)
    
     this.handleNameChange = this.handleNameChange.bind(this)
    }

    handleNameChange(event) {
        this.props.handleNameChange(event.target.value)
    }
    
  render() {
    return (
        
      <div className="PlayList">
        <input onChange={this.handleNameChange} defaultValue="New PlayList" />
        <TrackList tracks={this.props.PlayListTracks}  isRemoval={true} onRemove={this.props.onRemove}/>
        <button onClick={this.props.onSave}>Save to Spotify</button>
       
      </div>
    );
  }
}
