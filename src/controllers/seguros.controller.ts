import { Request, Response } from 'express'
import constantUtil from '../util/constant.util'
import { getAxiosSeguros } from '../api/seguros.api'
import { segurosURL } from '../util/endPoints.util'

export const getSeguros = async (req: Request, res: Response) => {
  try {
    const { url, rutaRecurso } = req
    const response = await getAxiosSeguros(segurosURL[rutaRecurso] + url)
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
