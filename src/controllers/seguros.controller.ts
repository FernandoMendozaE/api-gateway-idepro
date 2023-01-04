import { Request, Response } from 'express'
import messageUtil from '../util/message.util'
import { getAxiosSeguros } from '../api/seguros.api'
import { segurosURL } from '../util/endPoints.util'

export const getSeguros = async (req: Request, res: Response) => {
  try {
    const { url, rutaRecurso } = req
    const response = await getAxiosSeguros(segurosURL[rutaRecurso] + url)
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
