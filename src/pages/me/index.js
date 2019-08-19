import React from 'react'
import { renderRoutes } from 'react-router-config'
import Navigation from '../../components/base/Sidebar'

function Me({ route }) {
  return (
    <div className="wrapper-content">
      <Navigation />
      <div className="content">{renderRoutes(route.routes)}</div>
    </div>
  )
}

export default Me
