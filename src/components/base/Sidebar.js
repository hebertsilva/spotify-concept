import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import request from '../../utils/request'

export default class Navigation extends Component {
  state = {
    playlists: [],
    loaded: false
  }

  componentDidMount() {
    this.getPlaylists()
  }

  getPlaylists = async () => {
    const { data, status } = await request().get('/playlists')

    if (status === 200) {
      this.setState({ playlists: data.items, loaded: true })
    }
  }

  renderPlaylistsMenu = () => {
    const { playlists, loaded } = this.state
    if (!loaded) {
      return ''
    }

    const splitName = name => {
      return name.replace(/(.{18})..+/, '$1…')
    }

    return (
      <ol>
        {playlists.slice(0, 5).map((item, k) => {
          return (
            <li key={k}>
              <NavLink
                to={`/me/playlists/${item.id}`}
                title={item.name}
                strict
                activeClassName="selected"
              >
                {splitName(item.name)}
              </NavLink>
            </li>
          )
        })}
      </ol>
    )
  }

  render() {
    return (
      <nav className="wrapper-navigation">
        <div className="nav-section nav-fixed">
          <ol>
            <li>
              <Link to="/">
                <i className="icon-heart-empty"></i>Home
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="icon-heart-empty"></i>Home
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="icon-heart-empty"></i>Home
              </Link>
            </li>
          </ol>
        </div>

        <div className="nav-section">
          <p>Your library</p>

          <ol>
            <li>
              <Link to="/">Made for you</Link>
            </li>
            <li>
              <Link to="/">Recently Played</Link>
            </li>
            <li>
              <Link to="/">Liked songs</Link>
            </li>
            <li>
              <Link to="/">Albums</Link>
            </li>
            <li>
              <Link to="/">Artists</Link>
            </li>
          </ol>
        </div>

        <div className="nav-section">
          <p>Your playlists</p>

          {this.renderPlaylistsMenu()}
        </div>
      </nav>
    )
  }
}
