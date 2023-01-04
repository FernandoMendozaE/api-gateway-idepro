import axios from 'axios'
import { pagoCreditoEndPoint } from '../util/endPoints.util'
import * as https from 'https'

const httpsAgent = new https.Agent({
  rejectUnauthorized: false
})

export const postConsultaDeuda = async (credito: string) =>
  await axios.post(pagoCreditoEndPoint.ENDPOINT_CONSULTA_DEUDA, credito, { httpsAgent })

export const postPagoDeuda = async (credito: string) =>
  await axios.post(pagoCreditoEndPoint.ENDPOINT_PAGO_DEUDA, credito, { httpsAgent })

export const postReversionDeuda = async (credito: string) =>
  await axios.post(pagoCreditoEndPoint.ENDPOINT_REVERSION_DEUDA, credito, { httpsAgent })
