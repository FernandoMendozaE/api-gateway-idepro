import { verifyToken } from '../middlewares/authJwt'
import { Router } from 'express'
const router = Router()

import { isRole } from '../middlewares/verifyRolRecurso'
import {
  getAgencia,
  getCliente,
  getCredito,
  getCreditoAsignado,
  getGestor,
  getHistorialPago,
  getLineaCredito,
  getPerfil,
  getZona
} from '../controllers/cartera-digital.controller'
// import { schemaValition } from '../middlewares/schemaValidator.middleware'
// import { GetConsultaCuota, GetPago, GetReversion } from '../schemas/transaccion.schema'

router.get('/agencia', [verifyToken, isRole], getAgencia)
router.get('/zona', [verifyToken, isRole], getZona)
router.get('/gestor', [verifyToken, isRole], getGestor)
router.get('/perfil', [verifyToken, isRole], getPerfil)
router.get('/credito', [verifyToken, isRole], getCredito)
router.get('/lineaCredito', [verifyToken, isRole], getLineaCredito)
router.get('/creditoAsignado', [verifyToken, isRole], getCreditoAsignado)
router.get('historialPago', [verifyToken, isRole], getHistorialPago)
router.get('/cliente', [verifyToken, isRole], getCliente)
// router.get('/', [verifyToken, isRole], get)

export default router
