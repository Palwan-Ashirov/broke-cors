import express from 'express'
import { requestApi } from '../api/generic.js'

const router = express.Router()

// Helper function to handle API requests
const handleApiRequest = async (req, res, endpoint) => {
  try {
    const token = req.headers['tg-auth']
    const response = await requestApi({ url: endpoint, headers: { 'tg-auth': token } })
    res.send(response.data)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

router.get('/v1/users/me', (req, res) => {
  handleApiRequest(req, res, '/v1/users/me')
})

router.get('/v1/users/me/position', (req, res) => {
  handleApiRequest(req, res, '/v1/users/me/position')
})

router.get('/v1/users/me/balance', (req, res) => {
  handleApiRequest(req, res, '/v1/users/me/balance')
})
export default router
