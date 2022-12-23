import { Request, Response } from 'express'
import constantUtil from '../util/constant.util'
import { postConsultaDeuda, postPagoDeuda, postReversionDeuda } from '../api/pagoCredito.api'

export const consultaDeuda = async (req: Request, res: Response) => {
  try {
    const responseConsultaDeuda = await postConsultaDeuda(req.body)
    return res.json({
      mensaje: constantUtil.MENSAJE_CORRECTO,
      estado: constantUtil.STATUS_OK,
      data: responseConsultaDeuda.data.data
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

export const pagoDeuda = async (req: Request, res: Response) => {
  try {
    const responsePagoDeuda = await postPagoDeuda(req.body)
    return res.json({
      mensaje: constantUtil.MENSAJE_CORRECTO,
      estado: constantUtil.STATUS_OK,
      data: responsePagoDeuda.data.data
    })
  } catch (error) {
    console.error(error)
    res.json({
      mensaje: constantUtil.MENSAJE_ERROR,
      estado: constantUtil.STATUS_NOK,
      data: {}
    })
  }
}

export const reversionDeuda = async (req: Request, res: Response) => {
  try {
    const responseReversionDeuda = await postReversionDeuda(req.body)
    return res.json({
      mensaje: constantUtil.MENSAJE_CORRECTO,
      estado: constantUtil.STATUS_OK,
      data: responseReversionDeuda.data.data
    })
  } catch (error) {
    console.error(error)
    res.json({
      mensaje: constantUtil.MENSAJE_ERROR,
      estado: constantUtil.STATUS_NOK,
      data: {}
    })
  }
}
