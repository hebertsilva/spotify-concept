import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { isEmpty } from '../../utils/filter'

import logo from '../../static/img/Spotify-logo.png'
import './style.scss'

export default class Header extends Component {
  static propTypes = {
    data: PropTypes.object
  }

  static defaultProps = {
    data: {}
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log('## props =>', this.props.data)
  }

  render() {
    const { data } = this.props
    if (isEmpty(data)) {
      return null
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
                  <a href="" title="Sair">
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
