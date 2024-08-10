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

// Helper function to handle API requests
export const handleApiRequest = async (req, res, endpoint) => {
  try {
    const token = req.headers['tg-auth']
    const response = await requestApi({ url: endpoint, headers: { 'tg-auth': token } })
    res.send(response.data)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
