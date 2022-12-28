import config from './config'

export const pagoCreditoEndPoint = {
  ENDPOINT_CONSULTA_DEUDA: config.ENPOINT_TRANSACCION + 'bcp/consulta',
  ENDPOINT_PAGO_DEUDA: config.ENPOINT_TRANSACCION + 'bcp/pago',
  ENDPOINT_REVERSION_DEUDA: config.ENPOINT_TRANSACCION + 'bcp/reversion'
}

export const carteraDigitalURL: any = {
  '/api/carteradigital/agencia': config.ENPOINT_CARTERA + 'carteraDigital',
  '/api/carteradigital/zona': config.ENPOINT_CARTERA + 'carteraDigital',
  '/api/carteradigital/gestor': config.ENPOINT_CARTERA + 'carteraDigital',
  '/api/carteradigital/perfil': config.ENPOINT_CARTERA + 'carteraDigital',
  '/api/carteradigital/credito': config.ENPOINT_CARTERA + 'carteraDigital',
  '/api/carteradigital/lineaCredito': config.ENPOINT_CARTERA + 'carteraDigital',
  '/api/carteradigital/creditoAsignado': config.ENPOINT_CARTERA + 'carteraDigital',
  '/api/carteradigital/historialPago': config.ENPOINT_CARTERA + 'carteraDigital',
  '/api/carteradigital/cliente': config.ENPOINT_CARTERA + 'carteraDigital',
  '/api/carteradigital/fiador': config.ENPOINT_CARTERA + 'carteraDigital',
  '/api/carteradigital/fiadorAsignado': config.ENPOINT_CARTERA + 'carteraDigital',
  '/api/carteradigital/garantia': config.ENPOINT_CARTERA + 'carteraDigital',
  '/api/carteradigital/garantiaAsignado': config.ENPOINT_CARTERA + 'carteraDigital'
}

export const segurosURL: any = {
  '/api/seguros/participantePrestamo': config.ENPOINT_SEGUROS + 'seguros',
  '/api/seguros/cliente': config.ENPOINT_SEGUROS + 'seguros',
  '/api/seguros/datosPrestamo': config.ENPOINT_SEGUROS + 'seguros',
  '/api/seguros/datosOperacion': config.ENPOINT_SEGUROS + 'seguros',
  '/api/seguros/datosOperacionPorNumeroDocumento': config.ENPOINT_SEGUROS + 'seguros',
  '/api/seguros/miVidaguroPorFechas': config.ENPOINT_SEGUROS + 'seguros'
}
