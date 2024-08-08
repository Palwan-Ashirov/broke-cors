import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

export const requestApi = async ({ url, method = 'get', headers = {}, params = {}, data = {} }) => {
  const BASE_URL = process.env.BASE_URL

  const response = await axios({
    url: `${BASE_URL}${url}`,
    method,
    headers: { ...headers, 'content-type': 'application/json' },
    params,
    data,
  })
  return response
}
