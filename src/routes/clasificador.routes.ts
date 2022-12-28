import { Router } from 'express'
import { getClasificador } from '../controllers/clasificador.controller'

const router = Router()

router.get('/clasificador', getClasificador)

export default router
