import React, { Component } from 'react'
import request from '../../utils/request'
import Loading from '../../components/ui/Loading'

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

  convertTime = time => {
    const min = Math.floor((time / 1000 / 60) << 0)
    const sec = Math.floor((time / 1000) % 60)

    return `${min}:${sec < 10 ? '0' + sec : sec}`
  }

  genPopularity = value => {
    const media = parseInt(value / 10)
    let rows = []

    for (let index = 0; index < 8; index++) {
      rows.push(
        <span
          className={`${media === index ? 'active' : ''}`}
          key={index}
        ></span>
      )
    }

    return <div className="popularity">{rows}</div>
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

  renderTracksList = () => {
    const { playlists, loaded } = this.state
    if (!loaded) {
      return <tr></tr>
    }

    const { tracks } = playlists
    return tracks.items.map((item, k) => {
      const track = item.track
      return (
        <tr key={k}>
          <td>{track.track_number}</td>
          <td>
            <strong>{track.name}</strong>
          </td>
          <td>{track.artists[0].name}</td>
          <td>{track.album.name}</td>
          <td>{this.convertTime(track.duration_ms)}</td>
          <td>{this.genPopularity(track.popularity)}</td>
        </tr>
      )
    })
  }

  render() {
    const { playlists, loaded } = this.state

    if (!loaded) {
      return <Loading />
    }

    return (
      <div className="playlists-wrapper">
        <div
          className={`playlists-head color-${Math.floor(
            Math.random() * 3 + 1
          )}`}
        >
          <div>
            <h1 className="name">{playlists.name}</h1>

            <p>
              <i className="icon-star"></i> {playlists.tracks.total} songs
            </p>
          </div>
        </div>

        <div className="playlists-body">
          <table className="tracks-list">
            <thead>
              <tr>
                <th>#</th>
                <th>Song</th>
                <th>Artist</th>
                <th>Album</th>
                <th>Time</th>
                <th>Plays</th>
              </tr>
            </thead>
            <tbody>{this.renderTracksList()}</tbody>
          </table>

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
