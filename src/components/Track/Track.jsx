import "./track.css";

import React, { Component } from "react";

export default class Track extends Component {
  constructor(props) {
    super(props);
    this.state = {
      track: "",
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  addTrack(event) {
    this.props.onAdd(this.props.track);
  }

  removeTrack() {
    this.props.onRemove(this.state.track);
  }

  renderAction() {
    if (this.props.isRemoval) {
      return (
        <button className="Track-action" onClick={this.removeTrack}>
          -
        </button>
      );
    }
    return (
      <button className="Track-action" onClick={this.addTrack}>
        +
      </button>
    );
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>
            {this.props.track.artist} | {this.props.track.artist}
          </p>
          <iframe 
          src={"https.open.spotify.com/embed/track/"+this.props.track.id}
          width='300'
          height='80'
          frameBorder='0'
          allowTransparency='true'
          allow='encrypted-media'
          title='preview'

          />
        </div>
        {this.renderAction()}
      </div>
    );
  }
}
