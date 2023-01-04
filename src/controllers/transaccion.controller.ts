import { Request, Response } from 'express'
import messageUtil from '../util/message.util'
import { postConsultaDeuda, postPagoDeuda, postReversionDeuda } from '../api/pagoCredito.api'
import { saveLog } from './log.controller'

export interface typeResponse {
  mensaje: string
  estado: string
  data: any
}

export const consultaDeuda = async (req: Request, res: Response) => {
  try {
    const responseConsultaDeuda = await postConsultaDeuda(req.body)

    const dataResponse: typeResponse = {
      mensaje: messageUtil.MENSAJE_CORRECTO,
      estado: messageUtil.STATUS_OK,
      data: responseConsultaDeuda.data.data
    }
    await saveLog(req, dataResponse)

    return res.status(200).json(dataResponse)
  } catch (error) {
    if (error instanceof Error) {
      const dataError: typeResponse = {
        mensaje: messageUtil.MENSAJE_ERROR,
        estado: messageUtil.STATUS_NOK,
        data: {
          error: error
        }
      }
      await saveLog(req, dataError)
      res.status(500).json(dataError)
    }
  }
}

export const pagoDeuda = async (req: Request, res: Response) => {
  try {
    const responsePagoDeuda = await postPagoDeuda(req.body)

    const dataResponse: typeResponse = {
      mensaje: messageUtil.MENSAJE_CORRECTO,
      estado: messageUtil.STATUS_OK,
      data: responsePagoDeuda.data.data
    }
    await saveLog(req, dataResponse)

    return res.status(200).json(dataResponse)
  } catch (error) {
    if (error instanceof Error) {
      const dataError: typeResponse = {
        mensaje: messageUtil.MENSAJE_ERROR,
        estado: messageUtil.STATUS_NOK,
        data: {
          error: error
        }
      }
      await saveLog(req, dataError)
      res.status(500).json(dataError)
    }
  }
}

export const reversionDeuda = async (req: Request, res: Response) => {
  try {
    const responseReversionDeuda = await postReversionDeuda(req.body)

    const dataResponse: typeResponse = {
      mensaje: messageUtil.MENSAJE_CORRECTO,
      estado: messageUtil.STATUS_OK,
      data: responseReversionDeuda.data.data
    }
    await saveLog(req, dataResponse)
    return res.status(200).json(dataResponse)
  } catch (error) {
    if (error instanceof Error) {
      const dataError: typeResponse = {
        mensaje: messageUtil.MENSAJE_ERROR,
        estado: messageUtil.STATUS_NOK,
        data: {
          error: error
        }
      }
      await saveLog(req, dataError)
    }
  }
}
