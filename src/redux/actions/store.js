export const setStore = data => ({
  type: 'STORE_TESTE',
  payload: { isLoading: true, ...data }
})

export default {
  setStore
}
