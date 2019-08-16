import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import './style.scss'
import request from '../../utils/request'

export default class Header extends Component {
  state = {
    account: {},
    loading: true,
    authUser: false,
    redirect: false
  }

  constructor(props) {
    super(props)
  }

  signout = async event => {
    event.preventDefault()
    const { data, status } = await request().post('/signout')

    if (status === 200 && data.signout) {
      this.setState({ redirect: true })
    }
  }

  componentDidMount() {
    this.getUserDetails()
  }

  getUserDetails = async () => {
    const { data, status } = await request().get('/me')

    if (status === 200) {
      this.setState({ account: data, authUser: true })
    } else {
      this.setState({ authUser: false })
    }
  }

  render() {
    const { data } = this.props
    const { account, authUser } = this.state

    if (!authUser) {
      return null
    }

    if (this.state.redirect) {
      return <Redirect to="/" />
    }

    return (
      <header className="header-wrapper">
        <div className="header-search"></div>

        <div className="header-profile">
          <div className="profile-nav">
            <div className="user">
              <img
                src={account.images[0].url}
                alt={account.display_name}
                width="120"
              />

              <div className="menu">
                <span className="icon-angle-down color-ft-gray-200"></span>
              </div>
            </div>

            <ol>
              <li>
                <a href={account.external_urls.spotify} title="Perfil">
                  Perfil
                </a>
              </li>
              <li>
                <a href="" title="Sair" onClick={this.signout}>
                  Sair
                </a>
              </li>
            </ol>
          </div>
        </div>
      </header>
    )
  }
}
