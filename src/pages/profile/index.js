import React, { Component } from 'react'
import request from '../../utils/request'
// import { Redirect } from 'react-router-dom'
import Loading from '../../components/ui/Loading'

import './style.scss'

export default class Profile extends Component {
  state = {
    account: {},
    loaded: false
  }

  componentDidMount() {
    this.getProfileMe()
  }

  getProfileMe = async () => {
    const { data, status } = await request().get('/me')
    console.log('## account =>', data)
    if (status === 200) {
      this.setState({ account: data, loaded: true })
    }
  }

  render() {
    const { loaded, account } = this.state

    if (!loaded) {
      return <Loading />
    }

    return (
      <div className="content-wrapper">
        <div className="content-head color-1">
          <div class="head-profile">
            <div className="profile-image">
              <img src={account.images[0].url} alt={account.display_name} />
            </div>

            <div>
              <span>USER</span>
              <h1 className="name">{account.display_name}</h1>

              <p>
                <i className="icon-star"></i> {account.followers.total} followers
              </p>
            </div>
          </div>
        </div>

        <div className="content-body">
          
        </div>
      </div>
    )
  }
}
