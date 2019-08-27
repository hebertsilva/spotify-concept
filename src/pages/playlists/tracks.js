import React, { Component } from 'react'
import request from '../../utils/request'
import Loading from '../../components/ui/Loading'
import ListTracks from '../../components/tracks/ListTracks'

export default class Tracks extends Component {
  state = {
    playlists: [],
    loaded: false,
    id: ''
  }

  componentDidUpdate() {
    if (this.state.loaded) {
      this.getTracks()
    }
  }

  componentDidMount() {
    this.getTracks()
  }

  getTracks = async (query = null) => {
    const { id } = this.props.match.params

    if (id !== this.state.id || query) {
      this.setState({ loaded: false })
      const url = query ? `/playlists/${id}?${query}` : `/playlists/${id}`
      const { data, status } = await request().get(url)

      if (status === 200) {
        this.setState({ playlists: data, loaded: true, id: id })
      }
    }
  }

  splitUrlNav = url => {
    return url.split('?')[1]
  }

  prevNavPlaylist = event => {
    event.preventDefault()
    this.setState({ loaded: false })
    const url = this.state.playlists.tracks.previous

    if (url) {
      this.getTracks(this.splitUrlNav(url))
    }
  }

  prevNextPlaylist = event => {
    event.preventDefault()
    this.setState({ loaded: false })
    const url = this.state.playlists.tracks.next

    if (url) {
      this.getTracks(this.splitUrlNav(url))
    }
  }

  render() {
    const { playlists, loaded } = this.state

    if (!loaded) {
      return <Loading />
    }

    return (
      <div className="playlists-wrapper">
        <div
          className={`content-head color-${Math.floor(Math.random() * 3 + 1)}`}
        >
          <div>
            <h1 className="name">{playlists.name}</h1>

            <p>
              <i className="icon-star"></i> {playlists.tracks.total} songs
            </p>
          </div>
        </div>

        <div className="content-body">
          <ListTracks tracks={playlists.tracks.items} />

          {(playlists.tracks.next || playlists.tracks.previous) && (
            <div className="playlists-nav">
              <a
                href="/"
                onClick={this.prevNavPlaylist}
                className={!playlists.tracks.previous ? 'disabled' : ''}
              >
                Previous
              </a>
              <a
                href="/"
                onClick={this.prevNextPlaylist}
                className={!playlists.tracks.next ? 'disabled' : ''}
              >
                Next
              </a>
            </div>
          )}
        </div>
      </div>
    )
  }
}
