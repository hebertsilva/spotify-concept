import React from 'react'
import { renderRoutes } from 'react-router-config'
import Header from '../../components/commons/Header'
import Menu from '../../components/commons/Menu'

function Me({ route }) {
  return (
    <div className="wrapper-profile">
      <Header />
      <Menu />

      <div className="content">{renderRoutes(route.routes)}</div>
    </div>
  )
}

export default Me
