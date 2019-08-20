import React, { Component } from 'react'
import request from '../../utils/request'
import Loading from '../../components/ui/Loading'

export default class Tracks extends Component {
  state = {
    playlists: [],
    loaded: false,
    path: null
  }

  componentDidUpdate() {
    const { id } = this.props.match.params
    if (id !== this.state.path) {
      this.getTracks()
    }
  }

  componentDidMount() {
    this.getTracks()
  }

  getTracks = async () => {
    const { id } = this.props.match.params
    const { data, status } = await request().get(`/playlists/${id}`)

    if (status === 200) {
      this.setState({ playlists: data, loaded: true, path: id })
    }
  }

  convertTime = time => {
    const min = Math.floor((time / 1000 / 60) << 0)
    const sec = Math.floor((time / 1000) % 60)

    return `${min}:${sec}`
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
    if (!this.state.loaded) {
      return <Loading />
    }

    return (
      <div className="playlists-wrapper">
        <h1>playlists</h1>
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
      </div>
    )
  }
}
