import axios from 'axios'
import { CLIENT_ID, CLIENT_SECRET, API_BASE_ACCOUNTS } from './constants'

const hash = `${CLIENT_ID}:${CLIENT_SECRET}`

export default (proxy = null) => {
  return axios.create({
    baseURL: proxy || API_BASE_ACCOUNTS,
    headers: {
      Authorization: `Basic ${Buffer.from(hash).toString('base64')}`
    },
    validateStatus(status) {
      return status >= 200 && status <= 600
    }
  })
}
