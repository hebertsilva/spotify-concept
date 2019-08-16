import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom'
// import Loading from '../../components/ui/Loading'

import './style.scss'

export default class Profile extends Component {
  state = {
    account: {},
    loading: true,
    authUser: true
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
