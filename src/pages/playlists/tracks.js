import React, { Component } from 'react'
import request from '../../utils/request'

export default class Tracks extends Component {
  state = {
    playlists: [],
    loaded: false
  }
  componentDidMount() {
    this.getTracks()
  }

  getTracks = async () => {
    const { id } = this.props.match.params
    const { data, status } = await request().get(`/playlists/${id}`)

    if (status === 200) {
      this.setState({ playlists: data.items, loaded: true })
    }
  }

  render() {
    const { playlists, loaded } = this.state

    return (
      <div>
        <h1>playlists</h1>
      </div>
    )
  }
}
