import React, { Component } from 'react'
// import request from '../../utils/request'
// import Loading from '../../components/ui/Loading'

export default class Albums extends Component {
  componentDidMount() {
    this.getTracksAlbums()
  }

  getTracksAlbums = async () => {
    // const { data, status } = await request().get('/albums')
  }

  render() {
    return (
      <div>
        <h1>albums</h1>
      </div>
    )
  }
}
