import { Request, Response } from 'express'
import constantUtil from '../util/constant.util'
import apiEnpoint from '../api/carpeta-digital.api'
import { carteraDigitalEndPoint } from '../util/endPoints.util'

export const getAgencia = async (req: Request, res: Response) => {
  try {
    const response = await apiEnpoint.getAgenda()
    return res.json({
      mensaje: constantUtil.MENSAJE_CORRECTO,
      estado: constantUtil.STATUS_OK,
      data: response.data.data
    })
  } catch (e) {
    console.error(e)
    res.json({
      mensaje: constantUtil.MENSAJE_ERROR,
      estado: constantUtil.STATUS_NOK,
      data: {}
    })
  }
}

export const getZona = async (req: Request, res: Response) => {
  try {
    const enpoint = carteraDigitalEndPoint.ENDPOINT_AGENDA
    console.log(enpoint)
    const response = await apiEnpoint.getZona()
    return res.json({
      mensaje: constantUtil.MENSAJE_CORRECTO,
      estado: constantUtil.STATUS_OK,
      data: response.data.data
    })
  } catch (e) {
    console.error(e)
    res.json({
      mensaje: constantUtil.MENSAJE_ERROR,
      estado: constantUtil.STATUS_NOK,
      data: {}
    })
  }
}

export const getGestor = async (req: Request, res: Response) => {
  try {
    const response = await apiEnpoint.getGestor()
    return res.json({
      mensaje: constantUtil.MENSAJE_CORRECTO,
      estado: constantUtil.STATUS_OK,
      data: response.data.data
    })
  } catch (e) {
    console.error(e)
    res.json({
      mensaje: constantUtil.MENSAJE_ERROR,
      estado: constantUtil.STATUS_NOK,
      data: {}
    })
  }
}
export const getPerfil = async (req: Request, res: Response) => {
  try {
    const response = await apiEnpoint.getPerfil()
    return res.json({
      mensaje: constantUtil.MENSAJE_CORRECTO,
      estado: constantUtil.STATUS_OK,
      data: response.data.data
    })
  } catch (e) {
    console.error(e)
    res.json({
      mensaje: constantUtil.MENSAJE_ERROR,
      estado: constantUtil.STATUS_NOK,
      data: {}
    })
  }
}
export const getCredito = async (req: Request, res: Response) => {
  try {
    const response = await apiEnpoint.getCredito()
    return res.json({
      mensaje: constantUtil.MENSAJE_CORRECTO,
      estado: constantUtil.STATUS_OK,
      data: response.data.data
    })
  } catch (e) {
    console.error(e)
    res.json({
      mensaje: constantUtil.MENSAJE_ERROR,
      estado: constantUtil.STATUS_NOK,
      data: {}
    })
  }
}
export const getLineaCredito = async (req: Request, res: Response) => {
  try {
    const response = await apiEnpoint.getLineaCredito()
    return res.json({
      mensaje: constantUtil.MENSAJE_CORRECTO,
      estado: constantUtil.STATUS_OK,
      data: response.data.data
    })
  } catch (e) {
    console.error(e)
    res.json({
      mensaje: constantUtil.MENSAJE_ERROR,
      estado: constantUtil.STATUS_NOK,
      data: {}
    })
  }
}
export const getCreditoAsignado = async (req: Request, res: Response) => {
  try {
    const response = await apiEnpoint.getCreditoAsignado()
    return res.json({
      mensaje: constantUtil.MENSAJE_CORRECTO,
      estado: constantUtil.STATUS_OK,
      data: response.data.data
    })
  } catch (e) {
    console.error(e)
    res.json({
      mensaje: constantUtil.MENSAJE_ERROR,
      estado: constantUtil.STATUS_NOK,
      data: {}
    })
  }
}

export const getHistorialPago = async (req: Request, res: Response) => {
  try {
    const response = await apiEnpoint.getHistorialPago()
    return res.json({
      mensaje: constantUtil.MENSAJE_CORRECTO,
      estado: constantUtil.STATUS_OK,
      data: response.data.data
    })
  } catch (e) {
    console.error(e)
    res.json({
      mensaje: constantUtil.MENSAJE_ERROR,
      estado: constantUtil.STATUS_NOK,
      data: {}
    })
  }
}

export const getCliente = async (req: Request, res: Response) => {
  try {
    const response = await apiEnpoint.getCliente()
    return res.json({
      mensaje: constantUtil.MENSAJE_CORRECTO,
      estado: constantUtil.STATUS_OK,
      data: response.data.data
    })
  } catch (e) {
    console.error(e)
    res.json({
      mensaje: constantUtil.MENSAJE_ERROR,
      estado: constantUtil.STATUS_NOK,
      data: {}
    })
  }
}

// export const get = async (req: Request, res: Response) => {
//   try {
//     const response = await apiEnpoint.get()
//     return res.json({
//       mensaje: constantUtil.MENSAJE_CORRECTO,
//       estado: constantUtil.STATUS_OK,
//       data: response.data.data
//     })
//   } catch (e) {
//     console.error(e)
//     res.json({
//       mensaje: constantUtil.MENSAJE_ERROR,
//       estado: constantUtil.STATUS_NOK,
//       data: {}
//     })
//   }
// }
