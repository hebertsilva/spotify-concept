import axios from 'axios'

export default function request() {
  return axios.create({
    baseURL: '/proxy/api',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    validateStatus: status => {
      return status >= 200 && status < 500
    }
  })
}
