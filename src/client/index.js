import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from '../routes'

// Styling
import '../fontello/css/fontello.css'
import '../sass/base.scss'

render(
  <BrowserRouter>
    <Switch>{renderRoutes(routes)}</Switch>
  </BrowserRouter>,
  document.getElementById('root')
)
