import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom'
// import { isEmpty } from '../utils/filter'
import request from '../utils/request'

export default class Dashboard extends Component {
  state = {
    account: {}
  }

  componentDidMount() {
    this.getUserDetails()
  }

  getUserDetails = async () => {
    const { data, status } = await request().get('/me')

    if (status === 200) {
      this.setState({ account: data.account })
    }

    console.log('### user details =>', data)
  }

  render() {
    const { display_name } = this.state.account

    // if (isEmpty(this.state.account)) {
    // return <Redirect to="/" />
    // }

    return <div>Você está logado: {display_name}</div>
  }
}
