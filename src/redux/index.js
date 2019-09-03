import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'
import { Teste } from './middleware'

export function configureStore(initialState) {
  const middleware = [Teste()]
  let enhancer

  if (process.env.NODE_ENV === 'development') {
    // https://github.com/zalmoxisus/redux-devtools-extension#redux-devtools-extension
    let devToolsExtension = f => f
    if (window.devToolsExtension) {
      devToolsExtension =
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    }

    enhancer = compose(
      applyMiddleware(...middleware),
      devToolsExtension
    )
  } else {
    enhancer = applyMiddleware(...middleware)
  }

  const store = createStore(reducers, initialState, enhancer)

  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(require('./reducers').default)
    })
  }

  return store
}
