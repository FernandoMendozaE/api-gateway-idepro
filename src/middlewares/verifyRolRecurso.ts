import { NextFunction, Request, Response } from 'express'
import { sequelize } from '../database/database'

// * Verifica rol del usuario
export const isRole = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // * valida el rol
  const data = await sequelize.query(
    `select rol.id_usuario, rol.id_rol, clas.id_correlativo, clas.ruta_prefijo from idrolrecurso rol inner join idclasificador clas on clas.id_correlativo in (rol.id_rol, rol.id_recurso) and clas.id_prefijo = 6 where rol.id_rol = ${req.rolId}`
  )
  const rolFound = data[0]
  if (rolFound.length === 0)
    return res
      .status(403)
      .json({ message: 'No se encontro ningun rol para este recurso' })

  // * valida ruta acceso rol
  let findEnpoint = rolFound.find((parm: any) => {
    return parm.ruta_prefijo === req.originalUrl
  })

  if (!findEnpoint)
    return res
      .status(403)
      .json({ message: 'No se encontro ningun ruta para el rol' })

  next()
}
