import express from 'express'
import { handleApiRequest } from '../api/generic.js'

const router = express.Router()

router.get('/v1/tasks', (req, res) => {
  handleApiRequest(req, res, '/v1/tasks')
})

router.get('/v1/tasks/:taskId', (req, res) => {
  const { taskId } = req.params
  handleApiRequest(req, res, `/v1/tasks/${taskId}`)
})

export default router
