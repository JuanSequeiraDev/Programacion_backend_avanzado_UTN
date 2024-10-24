/* Logica del /api/status */
import { Router } from 'express'
import postPingController from '../controllers/status.controller.js'

const statusRouter = Router()

statusRouter.post('/ping', postPingController)

export default statusRouter