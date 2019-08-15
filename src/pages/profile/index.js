import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
// import { isEmpty } from '../utils/filter'
import Loading from '../../components/ui/Loading'
import Header from '../../components/commons/Header'

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
      this.setState({ account: data.account, loading: false, authUser: true })
    } else {
      this.setState({ authUser: false })
    }

    console.log('### user details =>', status)
  }

  render() {
    const { loading, account, authUser } = this.state
    const { display_name } = account

    if (loading) {
      return <Loading />
    }

    if (!authUser) {
      return <Redirect to="/" />
    }

    return (
      <div className="profile-wrapper">
        <div class="profile-main color-bg-white-100">
          <Header data={account} />

          <nav className="profile-sidebar">
            <ol class="sidebar-nav">
              <li>
                <a href="/">
                  <span>
                    <i className="icon-music"></i>
                  </span>
                  Playlists
                  <i className="icon-angle-right"></i>
                </a>
              </li>

              <li>
                <a href="/">
                  <span>
                    <i className="icon-music"></i>
                  </span>
                  Albums
                  <i className="icon-angle-right"></i>
                </a>
              </li>

              <li>
                <a href="/">
                  <span>
                    <i className="icon-music"></i>
                  </span>
                  Playlist
                  <i className="icon-angle-right"></i>
                </a>
              </li>

              <li>
                <a href="/">
                  <span>
                    <i className="icon-music"></i>
                  </span>
                  Playlist
                  <i className="icon-angle-right"></i>
                </a>
              </li>
            </ol>
          </nav>
        </div>

        <div class="profile-player color-bg-green-100">
          {/* vazio aqui vai o player componente do profile */}
        </div>
      </div>
    )
  }
}
