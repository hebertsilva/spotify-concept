import React from 'react'
import './style.scss'

export default function Menu() {
  return (
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
  )
}
