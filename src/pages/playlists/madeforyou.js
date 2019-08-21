import React, { Component } from 'react'
import request from '../../utils/request'
import Loading from '../../components/ui/Loading'

export default class MadeForYou extends Component {
  componentDidMount() {
    this.getTracksMadeForYou()
  }

  getTracksMadeForYou = async () => {
    const { data, status } = await request().get('/recommendations')

    console.log('### data =>', data)
  }

  render() {
    return (
      <div>
        <h1>Made for You</h1>
      </div>
    )
  }
}
