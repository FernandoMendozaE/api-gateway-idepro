import axios from 'axios'
import { pagoCreditoEndPoint } from '../util/pagoCredito.endPoints'

export const postConsultaDeuda = async (credito: string) =>
  await axios.post(pagoCreditoEndPoint.ENDPOINT_CONSULTA_DEUDA, credito)

export const postPagoDeuda = async (credito: string) =>
  await axios.post(pagoCreditoEndPoint.ENDPOINT_PAGO_DEUDA, credito)

export const postReversionDeuda = async (credito: string) =>
  await axios.post(pagoCreditoEndPoint.ENDPOINT_REVERSION_DEUDA, credito)
