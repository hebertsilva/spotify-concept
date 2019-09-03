import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, NavLink } from 'react-router-dom'

export default class Navigation extends Component {
  static propTypes = {
    playlists: PropTypes.array,
    isLoading: PropTypes.bool
  }

  renderPlaylistsMenu = () => {
    const { playlists, isLoading } = this.props

    if (isLoading) {
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
              <Link to="/me">
                <i className="icon-heart-empty"></i>Profile
              </Link>
            </li>
          </ol>
        </div>

        <div className="nav-section">
          <p>Your library</p>

          <ol>
            <li>
              <NavLink
                to="/me/madeforyou"
                title="Made for you"
                activeClassName="selected"
              >
                Made for you
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/me/recents"
                title="Recently Played"
                activeClassName="selected"
              >
                Recently Played
              </NavLink>
            </li>
            <li>
              <Link to="/">Liked songs</Link>
            </li>
            <li>
              <NavLink
                to="/me/albums"
                title="Albums"
                activeClassName="selected"
              >
                Albums
              </NavLink>
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
