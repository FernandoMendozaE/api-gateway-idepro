import { verifyToken } from '../middlewares/authJwt'
import { Router } from 'express'
const router = Router()

import { isRole } from '../middlewares/verifyRolRecurso'
import { getCarteraDigital } from '../controllers/cartera-digital.controller'

router.get('/agencia', [verifyToken, isRole], getCarteraDigital)
router.get('/zona', [verifyToken, isRole], getCarteraDigital)
router.get('/gestor', [verifyToken, isRole], getCarteraDigital)
router.get('/perfil', [verifyToken, isRole], getCarteraDigital)
router.get('/credito', [verifyToken, isRole], getCarteraDigital)
router.get('/lineaCredito', [verifyToken, isRole], getCarteraDigital)
router.get('/creditoAsignado', [verifyToken, isRole], getCarteraDigital)
router.get('/historialPago', [verifyToken, isRole], getCarteraDigital)
router.get('/cliente', [verifyToken, isRole], getCarteraDigital)
router.get('/fiador', [verifyToken, isRole], getCarteraDigital)
router.get('/fiadorAsignado', [verifyToken, isRole], getCarteraDigital)
router.get('/garantia', [verifyToken, isRole], getCarteraDigital)
router.get('/garantiaAsignado', [verifyToken, isRole], getCarteraDigital)

export default router
