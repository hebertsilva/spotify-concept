import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { query } from '../../utils/filter'
import request from '../../utils/request'
import Loading from '../../components/ui/Loading'

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
    const { redirect } = this.state

    if (redirect) {
      return <Redirect to="/me/" />
    }

    return (
      <div className="wrapper-content">
        <Loading />
      </div>
    )
  }
}
