import React, { Component } from 'react'
import request from '../../utils/request'
import Loading from '../../components/ui/Loading'
import ListTracks from '../../components/tracks/ListTracks'

export default class Recents extends Component {
  state = {
    tracks: [],
    loaded: false
  }

  componentDidMount() {
    this.getTracksRecents()
  }

  getTracksRecents = async () => {
    const { data, status } = await request().get('/recents')

    if (status === 200) {
      this.setState({ tracks: data.items, loaded: true })
    }
  }

  render() {
    const { loaded, tracks } = this.state
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
            <h1 className="name">Recently played</h1>

            {/* <p>
              <i className="icon-star"></i> {playlists.tracks.total} songs
            </p> */}
          </div>
        </div>

        <div className="playlists-body">
          <ListTracks tracks={tracks} />
        </div>
      </div>
    )
  }
}
