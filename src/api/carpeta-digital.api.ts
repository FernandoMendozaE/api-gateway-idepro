import axios from 'axios'
import { carteraDigitalEndPoint } from '../util/endPoints.util'

export default {
  getAgenda: async () => await axios.get(carteraDigitalEndPoint.ENDPOINT_AGENDA),
  getZona: async () => await axios.get(carteraDigitalEndPoint.ENDPOINT_ZONA),
  getGestor: async () => await axios.get(carteraDigitalEndPoint.ENDPOINT_GESTOR),
  getPerfil: async () => await axios.get(carteraDigitalEndPoint.ENDPOINT_PERFIL),
  getCredito: async () => await axios.get(carteraDigitalEndPoint.ENDPOINT_CREDITO),
  getLineaCredito: async () => await axios.get(carteraDigitalEndPoint.ENDPOINT_LINEA_CREDITO),
  getCreditoAsignado: async () => await axios.get(carteraDigitalEndPoint.ENDPOINT_CREDITO_ASIGNADO),
  getHistorialPago: async () => await axios.get(carteraDigitalEndPoint.ENDPOINT_HISTORIAL_PAGO),
  getCliente: async () => await axios.get(carteraDigitalEndPoint.ENDPOINT_CLIENTE)
}
