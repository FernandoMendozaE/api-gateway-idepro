import { Clasificador } from '../model/Clasificador'
import { Request, Response } from 'express'
import messageUtil from '../util/message.util'

export async function getClasificador(req: Request, res: Response) {
  try {
    const clasificador = await Clasificador.findAll({})
    res.status(200).json({
      mensaje: messageUtil.MENSAJE_CORRECTO,
      estado: messageUtil.STATUS_OK,
      data: clasificador
    })
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        mensaje: messageUtil.MENSAJE_ERROR,
        estado: messageUtil.STATUS_NOK,
        data: {
          error: error.message
        }
      })
    }
  }
}
