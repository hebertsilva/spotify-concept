import React, { Component } from 'react'
import request from '../../utils/request'
import Loading from '../../components/ui/Loading'

import './style.scss'

export default class Profile extends Component {
  state = {
    account: {},
    artists: [],
    loaded: false
  }

  componentDidMount() {
    this.getProfileMe()
    this.getTopArtists()
  }

  getProfileMe = async () => {
    const { data, status } = await request().get('/me')

    if (status === 200) {
      this.setState({ account: data, loaded: true })
    }
  }

  getTopArtists = async () => {
    const { data, status } = await request().get('/top?type=artists')

    if (status === 200) {
      this.setState({ artists: data.items })
    }
  }

  renderTopArtists = () => {
    const { artists } = this.state
    if (!artists.length) {
      return ''
    }

    return (
      <div className="list-albums">
        <h1>Top artists</h1>

        <ol className="list">
          {artists.map((value, key) => {
            const image = value.images[0]

            return (
              <li key={key}>
                <div className="image">
                  <img src={image.url} alt={value.name} />
                </div>

                <h2>{value.name}</h2>
              </li>
            )
          })}
        </ol>
      </div>
    )
  }

  render() {
    const { loaded, account } = this.state

    if (!loaded) {
      return <Loading />
    }

    const avatar = account.images.length ? account.images[0].url : null

    return (
      <div className="content-wrapper">
        <div className="content-head color-1">
          <div className="head-profile">
            {avatar && (
              <div className="profile-image">
                <img src={avatar} alt={account.display_name} />
              </div>
            )}

            <div>
              <span>USER</span>
              <h1 className="name">{account.display_name}</h1>

              <p>
                <i className="icon-star"></i> {account.followers.total}
                followers
              </p>
            </div>
          </div>
        </div>

        <div className="content-body">{this.renderTopArtists()}</div>
      </div>
    )
  }
}
