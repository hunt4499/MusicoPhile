import './App.css';

import PlayList from '../PlayList/PlayList'
import React from 'react';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Spotify from '../../utils/Spotify'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      searchResults: [],
      playlistName: "New playlist",
      playlistTracks: []
    }

    this.searchTrack = this.searchTrack.bind(this)
    this.removeTrack = this.removeTrack.bind(this)
    this.updatePlaylistName = this.updatePlaylistName.bind(this)
    this.addTrack = this.addTrack.bind(this)
    this.savePlaylist = this.savePlaylist.bind(this)
    this.removeTrackFromSearch = this.removeTrackFromSearch.bind(this)
    this.doThese = this.doThese.bind(this)
  }

  searchTrack(item) {
    Spotify.search(item).then((searchResults) => {
      this.setState({ searchResults: searchResults })
    })
  }

  addTrack(item) {
    let track = this.state.playlistTracks
    if (track.find(savedTrack => item.id === savedTrack.id)) {
      return
    }
    track.push(item)
    this.setState({ playlistTracks: track })

  }

  removeTrack(item) {
    let track = this.state.playlistTracks
    let trackSearch = this.state.searchResults
    track = track.filter(current => current.id === item.id)
    trackSearch.unshift(item)
    this.setState({ playlistTracks: track })

  }

  removeTrackFromSearch(item) {
    let track = this.state.searchResults
    track = track.filter(current => current.id === item.id)
    this.setState({ searchResults: track })
  }

  doThese(item) {
    this.addTrack(item)
    this.removeTrackFromSearch(item)
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name })

  }

  savePlaylist(item) {
    const trackUris = this.state.playlistTracks.map(track => track.uri)
    Spotify.savePlaylist(this.state.playlistName, trackUris).then(() => {
      this.setState({updatePlaylistName:"New Playlist",playlistTracks:[]})
    })
  }
 render(){
  return(
    <div>
      <h1>
        <a href="http://localhost:3000/">MusicoPhile</a>
      </h1>
      <div className="App">
        <SearchBar onSearch={this.searchTrack}/>
        <div className='App-playist'>
          <SearchResults searchResults={this.state.searchResults} onAdd={this.doThese} />
          <PlayList playlistTracks={this.state.playlistTracks} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist} onRemove={this.removeTrack}/>
        </div>
      
      </div>

    </div>
  )
 }
}

export default App