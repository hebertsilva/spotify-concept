import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../static/img/Spotify-logo.png'
import './style.scss'

export default class Menu extends Component {
  componentDidMount() {
    const props = this.props
    console.log(props)
  }

  render() {
    return (
      <nav className="profile-sidebar">
        <div className="sidebar-name">
          <h1>
            <img src={logo} alt="Spotify Concept" width="120" />
            <p>Concept</p>
          </h1>
        </div>

        <ol className="sidebar-nav">
          <li>
            <Link to="/me/playlits">
              <span>
                <i className="icon-music"></i>
              </span>
              Playlists
              <i className="icon-angle-right"></i>
            </Link>
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
    )
  }
}
