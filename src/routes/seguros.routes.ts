import { verifyToken } from '../middlewares/authJwt'
import { Router } from 'express'
const router = Router()

import { isRole } from '../middlewares/verifyRolRecurso'
import { getSeguros } from '../controllers/seguros.controller'
import { schemaValition } from '../middlewares/schemaValidator.middleware'
import {
  GetSegurosFechaInicialFinalSchema,
  GetSegurosUserDocumentoSchema,
  GetSegurosUserPrestamoSchema
} from '../schemas/seguros.schema'

router.get(
  '/participantePrestamo/:usuario/:numeroPrestamo',
  schemaValition(GetSegurosUserPrestamoSchema),
  [verifyToken, isRole],
  getSeguros
)

router.get(
  '/cliente/:usuario/:numeroDocumento',
  schemaValition(GetSegurosUserDocumentoSchema),
  [verifyToken, isRole],
  getSeguros
)

router.get(
  '/datosPrestamo/:usuario/:numeroPrestamo',
  schemaValition(GetSegurosUserPrestamoSchema),
  [verifyToken, isRole],
  getSeguros
)

router.get(
  '/datosOperacion/:usuario/:numeroPrestamo',
  schemaValition(GetSegurosUserPrestamoSchema),
  [verifyToken, isRole],
  getSeguros
)

router.get(
  '/datosOperacionPorNumeroDocumento/:usuario/:numeroDocumento',
  schemaValition(GetSegurosUserDocumentoSchema),
  [verifyToken, isRole],
  getSeguros
)

router.get(
  '/miVidaguroPorFechas/:dateInicio/:dateFinal',
  schemaValition(GetSegurosFechaInicialFinalSchema),
  [verifyToken, isRole],
  getSeguros
)

export default router
