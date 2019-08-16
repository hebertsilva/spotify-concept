import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Loading from '../../components/ui/Loading'
import Header from '../../components/commons/Header'
import Menu from '../../components/commons/Menu'
import Playlist from '../../components/music/Playlist'

import request from '../../utils/request'
import './style.scss'

export default class Profile extends Component {
  state = {
    account: {},
    loading: true,
    authUser: true
  }

  componentDidMount() {
    this.getUserDetails()
  }

  getUserDetails = async () => {
    const { data, status } = await request().get('/me')

    if (status === 200) {
      this.setState({ account: data, loading: false, authUser: true })
    } else {
      this.setState({ authUser: false })
    }
  }

  render() {
    const { loading, account, authUser } = this.state

    if (!authUser) {
      return <Redirect to="/" />
    }

    if (loading) {
      return <Loading />
    }

    return (
      <div className="profile-wrapper">
        <div className="profile-main color-bg-white-100">
          <Header data={account} />

          <div className="wrapper-content">
            <Menu />

            <div className="wrapper-body">
              <Playlist />
            </div>
          </div>
        </div>

        <div className="profile-player color-bg-green-100"></div>
      </div>
    )
  }
}
