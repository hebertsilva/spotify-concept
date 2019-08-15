import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { isEmpty } from '../../utils/filter'
import { Redirect } from 'react-router-dom'
import logo from '../../static/img/Spotify-logo.png'
import './style.scss'
import request from '../../utils/request'

export default class Header extends Component {
  static propTypes = {
    data: PropTypes.object
  }

  static defaultProps = {
    data: {}
  }

  state = {
    redirect: false
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log('## props =>', this.props.data)
  }

  signout = async event => {
    event.preventDefault()
    const { data, status } = await request().post('/signout')

    if (status === 200 && data.signout) {
      this.setState({ redirect: true })
    }
  }

  render() {
    const { data } = this.props
    if (isEmpty(data)) {
      return null
    }

    if (this.state.redirect) {
      return <Redirect to="/" />
    }

    const { display_name } = this.props.data

    return (
      <header className="header-wrapper">
        <div className="header-name">
          <h1>
            <img src={logo} alt="Spotify Concept" width="120" />
            <p>Concept</p>
          </h1>
        </div>

        <div className="header-customer">
          <div className="header-search"></div>

          <div className="header-profile">
            <div className="profile-nav">
              <div className="user">
                <img
                  src={data.images[0].url}
                  alt={data.display_name}
                  width="120"
                />

                <div className="menu">
                  <span className="icon-angle-down color-ft-gray-200"></span>
                </div>
              </div>

              <ol>
                <li>
                  <a href={data.external_urls.spotify} title="Perfil">
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
        </div>
      </header>
    )
  }
}
