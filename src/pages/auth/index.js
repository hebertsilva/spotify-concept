import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { query } from '../../utils/filter'
import request from '../../utils/request'
import logo from '../../static/img/Spotify-logo.png'
import './style.scss'

export default class Authorization extends Component {
  state = {
    redirect: false,
    loading: true
  }

  componentDidMount() {
    const { code, state } = query()

    this.getAccessToken(code, state)
  }

  getAccessToken = async (code, state) => {
    const { data } = await request().post('/set-token', { code, state })

    if (data.authorization) {
      this.setState({ redirect: data.authorization, loading: false })
    }
  }

  render() {
    const { redirect, loading } = this.state
    console.log('### me =>')
    // if (loading) {
    //   return <Loading />
    // }

    if (redirect) {
      return <Redirect to="/me/" />
    }

    return (
      <div className="auth-wrapper">
        <div>
          <img src={logo} title="Spotify Auth" width="100%" />
        </div>
      </div>
    )
  }
}
