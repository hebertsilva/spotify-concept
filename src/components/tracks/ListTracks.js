import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ListTracks extends Component {
  static propTypes = {
    tracks: PropTypes.array
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

  renderTracksList = () => {
    const tracks = this.props.tracks
    return tracks.map((item, k) => {
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
    return (
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
    )
  }
}
