import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom'
// import { isEmpty } from '../utils/filter'
import Loading from '../../components/ui/Loading'

import request from '../../utils/request'

export default class Profile extends Component {
  state = {
    account: {},
    loading: true
  }

  componentDidMount() {
    this.getUserDetails()
  }

  getUserDetails = async () => {
    const { data, status } = await request().get('/me')

    if (status === 200) {
      this.setState({ account: data.account, loading: false })
    }

    console.log('### user details =>', data)
  }

  render() {
    const { loading, account } = this.state
    const { display_name } = account

    if (loading) {
      return <Loading />
    }

    // if (isEmpty(this.state.account)) {
    // return <Redirect to="/" />
    // }

    return <div>Você está logado: {display_name}</div>
  }
}
