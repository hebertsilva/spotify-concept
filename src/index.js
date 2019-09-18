import React from 'react'
import ReactDOM from 'react-dom'
import routes from './routes'
import { configureStore } from './redux'
import { BrowserRouter, Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import './fontello/css/fontello.css'
import './sass/base.scss'

require('dotenv').config()

const initialState = {}
const store = configureStore(initialState)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>{renderRoutes(routes)}</Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
