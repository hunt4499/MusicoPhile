import "./SearchResults.css";

import React, { Component } from "react";

import TrackList from "../TrackList/TrackList";

export default class SearchResults extends Component {
  render() {
    return (
      <div className="SearchResults">
        <h3>Search Results</h3>
          <TrackList
            tracks={this.props.searchResults}
            onAdd={this.props.onAdd}
          />
        
      </div>
    );
  }
}
