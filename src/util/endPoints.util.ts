import config from './config'

export const pagoCreditoEndPoint = {
  ENDPOINT_CONSULTA_DEUDA: config.ENPOINT_TRANSACCION + 'bcp/consulta',
  ENDPOINT_PAGO_DEUDA: config.ENPOINT_TRANSACCION + 'bcp/pago',
  ENDPOINT_REVERSION_DEUDA: config.ENPOINT_TRANSACCION + 'bcp/reversion'
}
