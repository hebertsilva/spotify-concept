import React, { Component } from 'react'
import { query } from '../utils/filter'
import { Redirect } from 'react-router-dom'

import axios from 'axios'

export default class Authorization extends Component {
  state = {
    redirect: false
  }

  componentDidMount() {
    const { code, state } = query()
    this.getAccessToken(code, state)
  }

  getAccessToken = async (code, state) => {
    const { data } = await axios.post('/api/set-token', { code, state })

    if (data.authorization) {
      this.setState({ redirect: data.authorization })
    }
  }

  render() {
    const { redirect } = this.state

    if (redirect) {
      return <Redirect to="/dashboard" />
    }

    return <div>Aguarde</div>
  }
}
