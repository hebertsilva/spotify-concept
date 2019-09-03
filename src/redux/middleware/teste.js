const STORE_TESTE = 'STORE_TESTE'

const handleTeste = async (store, dispatch, action) => {
  dispatch(action)

  // console.log('### action handleTeste =>', action)
}

const handlers = {
  [STORE_TESTE]: handleTeste
}

export default function Teste() {
  return store => dispatch => action => {
    const handler = handlers[action.type]

    if (typeof handler === 'function') {
      handler(store, dispatch, action)
    } else {
      dispatch(action)
    }
  }
}
