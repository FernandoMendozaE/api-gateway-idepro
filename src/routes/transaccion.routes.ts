import { verifyToken } from '../middlewares/authJwt'
import { Router } from 'express'
const router = Router()

import {
  consultaDeuda,
  pagoDeuda,
  reversionDeuda
} from '../controllers/transaccion.controller'
import { isRole } from '../middlewares/verifyRolRecurso'
import { schemaValition } from '../middlewares/schemaValidator.middleware'
import {
  GetConsultaCuota,
  GetPago,
  GetReversion
} from '../schemas/transaccion.schema'

router.post(
  '/consulta',
  schemaValition(GetConsultaCuota),
  [verifyToken, isRole],
  consultaDeuda
)
router.post('/pago', schemaValition(GetPago), [verifyToken], pagoDeuda)
router.post(
  '/reversion',
  schemaValition(GetReversion),
  [verifyToken],
  reversionDeuda
)

export default router
