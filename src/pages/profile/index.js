import React, { Component } from 'react'
import request from '../../utils/request'
// import { Redirect } from 'react-router-dom'
// import Loading from '../../components/ui/Loading'

import './style.scss'

export default class Profile extends Component {
  state = {
    account: {},
    loaded: true
  }

  componentDidMount() {
    this.getUsersFollowing()
  }

  getUsersFollowing = async () => {
    const { data, status } = await request().get('/following')
    console.log('## account =>', data)
    if (status === 200) {
      this.setState({ account: data, loaded: true })
    }
  }

  render() {
    // const { loading, account, authUser } = this.state

    return (
      <div className="profile-wrapper">
        <h1>Is home!</h1>
      </div>
    )
  }
}
