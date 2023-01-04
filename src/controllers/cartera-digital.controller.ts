import { Request, Response } from 'express'
import messageUtil from '../util/message.util'
import { getAxiosCarteraDigital } from '../api/cartera-digital.api'
import { carteraDigitalURL } from '../util/endPoints.util'

export const getCarteraDigital = async (req: Request, res: Response) => {
  try {
    const { url, rutaRecurso } = req
    const response = await getAxiosCarteraDigital(carteraDigitalURL[rutaRecurso] + url)
    return res.status(200).json({
      mensaje: messageUtil.MENSAJE_CORRECTO,
      estado: messageUtil.STATUS_OK,
      data: response.data.data
    })
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        mensaje: messageUtil.MENSAJE_ERROR,
        estado: messageUtil.STATUS_NOK,
        data: {
          error: error
        }
      })
    }
  }
}
