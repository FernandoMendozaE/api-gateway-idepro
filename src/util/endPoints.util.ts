import config from './config'

export const pagoCreditoEndPoint = {
  ENDPOINT_CONSULTA_DEUDA: config.ENPOINT_TRANSACCION + 'bcp/consulta',
  ENDPOINT_PAGO_DEUDA: config.ENPOINT_TRANSACCION + 'bcp/pago',
  ENDPOINT_REVERSION_DEUDA: config.ENPOINT_TRANSACCION + 'bcp/reversion'
}

export const carteraDigitalEndPoint = {
  ENDPOINT_AGENDA: config.ENPOINT_CARTERA + 'carteraDigital/agencia',
  ENDPOINT_ZONA: config.ENPOINT_CARTERA + 'carteraDigital/zona',
  ENDPOINT_GESTOR: config.ENPOINT_CARTERA + 'carteraDigital/gestor',
  ENDPOINT_PERFIL: config.ENPOINT_CARTERA + 'carteraDigital/perfil',
  ENDPOINT_CREDITO: config.ENPOINT_CARTERA + 'carteraDigital/credito',
  ENDPOINT_LINEA_CREDITO: config.ENPOINT_CARTERA + 'carteraDigital/lineaCredito',
  ENDPOINT_CREDITO_ASIGNADO: config.ENPOINT_CARTERA + 'carteraDigital/creditoAsignado',
  ENDPOINT_HISTORIAL_PAGO: config.ENPOINT_CARTERA + 'carteraDigital/historialPago',
  ENDPOINT_CLIENTE: config.ENPOINT_CARTERA + 'carteraDigital/cliente'
}
