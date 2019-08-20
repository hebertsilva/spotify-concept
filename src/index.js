import React from 'react'
import ReactDOM from 'react-dom'
import routes from './routes'
import { BrowserRouter, Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import './fontello/css/fontello.css'
import './sass/base.scss'

require('dotenv').config()

ReactDOM.render(
  <BrowserRouter>
    <Switch>{renderRoutes(routes)}</Switch>
  </BrowserRouter>,
  document.getElementById('root')
)
