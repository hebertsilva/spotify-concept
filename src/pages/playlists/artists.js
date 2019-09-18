import React, { Component } from 'react'
import request from '../../utils/request'
// import Loading from '../../components/ui/Loading'

export default class TopArtists extends Component {
  componentDidMount() {
    this.getTracksTopArtists()
  }

  getTracksTopArtists = async () => {
    const { data, status } = await request().get('/top?type=artists')

    console.log('## data =>', data)
  }

  render() {
    return (
      <div>
        <h1>Top Artists</h1>
      </div>
    )
  }
}
