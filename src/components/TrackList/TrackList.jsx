import "./TrackList.css";

import React, { Component } from "react";

import Track from "../Track/Track";

export default class TrackList extends Component {
  render() {
    const tracksFound=this.props.tracks||[]
    return (
      <div >
        {tracksFound.map((track) => {
          return (
            <Track
              track={track}
              onAdd={this.props.onAdd}
              onRemove={this.props.onRemove}
              isRemoval={this.props.isRemoval}
              key={track.id}
            />
          );
        })}
      </div>
    );
  }
}
