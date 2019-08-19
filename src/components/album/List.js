import React, { Component } from 'react'
import request from '../../utils/request'
import Loading from '../ui/Loading'

import './style.scss'

export default class List extends Component {
  state = {
    data: [],
    loaded: false
  }

  componentDidMount() {
    this.getPlaylists()
  }

  getPlaylists = async () => {
    const { data, status } = await request().get('/playlist')
    if (status === 200) {
      this.setState({ data: data.items, loaded: true })
    }
  }

  renderPlaylist = () => {
    const { data } = this.state

    if (!data.length) {
      return ''
    }

    return (
      <ol>
        {data.map((item, k) => {
          return (
            <li key={k}>
              <a href={item.external_urls.spotify} target="_blank">
                <div className="image">
                  <img src={item.images[0].url} alt={item.name} />
                </div>

                <p>{item.name}</p>
                <p>{item.tracks.total}+ Total Songs</p>
              </a>
            </li>
          )
        })}
      </ol>
    )
  }

  render() {
    if (!this.state.loaded) {
      return <Loading />
    }

    return (
      <div className="wrapper-playlist">
        <h1 className="title-section">Playlist</h1>

        {this.renderPlaylist()}
      </div>
    )
  }
}
