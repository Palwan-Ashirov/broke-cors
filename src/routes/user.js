import express from 'express'
import { handleApiRequest } from '../api/generic.js'

const router = express.Router()

router.get('/v1/users/me', (req, res) => {
  handleApiRequest(req, res, '/v1/users/me')
})

router.get('/v1/users/me/position', (req, res) => {
  handleApiRequest(req, res, '/v1/users/me/position')
})

router.get('/v1/users/me/balance', (req, res) => {
  handleApiRequest(req, res, '/v1/users/me/balance')
})

router.get('/', (req, res) => {
  res.send('Hello from user routes')
})

export default router
