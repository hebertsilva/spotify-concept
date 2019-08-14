import React, { Component } from 'react'
import axios from 'axios'
import request from '../../utils/request'
import logo from '../../static/img/Spotify-logo.png'
import user from '../../static/img/user.png'
import './style.scss'

export default class Home extends Component {
  signin = async event => {
    event.preventDefault()

    const { data } = await request().get('/login')
    window.location.href = data
  }

  render() {
    return (
      <div className="wrapper home-wrapper">
        <div className="home-children">
          <div className="children-box">
            <h1 className="site-name">
              <img src={logo} title="Spotify Concept" width="150" />
            </h1>

            <h2 className="font-1">
              Spotify concept <br /> experience
            </h2>
            <p>Sign in your Spotify for an awesome experience</p>

            <a
              href="#"
              onClick={this.signin}
              className="button button-green-100"
            >
              Sign in
            </a>
          </div>

          <div className="children-box">
            <img src={user} title="Spotify User" />
          </div>
        </div>
      </div>
    )
  }
}
