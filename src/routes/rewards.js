import express from 'express'
import { handleApiRequest } from '../api/generic.js'

const router = express.Router()

router.get('/v1/rewards/rating', (req, res) => {
  handleApiRequest(req, res, '/v1/rewards/rating')
})

router.post('/v1/rewards/rating', (req, res) => {
  handleApiRequest(req, res, `/v1/rewards/rating`)
})

export default router
