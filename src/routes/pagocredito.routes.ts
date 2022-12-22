import { verifyToken } from '../middlewares/authJwt'
import { Router } from 'express'
const router = Router()

import { consultaDeuda, pagoDeuda, reversionDeuda } from '../controllers/pagoCredito.controller'
import { isRole } from '../middlewares/verifySignup'

router.post('/consulta', [verifyToken, isRole('admin')], consultaDeuda)
router.post('/pago', [verifyToken], pagoDeuda)
router.post('/reversion', [verifyToken], reversionDeuda)

export default router
