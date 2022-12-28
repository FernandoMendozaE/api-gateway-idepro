import { Clasificador } from '../model/Clasificador'
import { Request, Response } from 'express'

export async function getClasificador(req: Request, res: Response) {
  try {
    const clasificador = await Clasificador.findAll({})
    res.json(clasificador)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        message: error.message
      })
    }
  }
}
