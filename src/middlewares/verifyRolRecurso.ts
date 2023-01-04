import { NextFunction, Request, Response } from 'express'
import { sequelize } from '../database/database'

// * Verifica rol del usuario
export const isRole = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { rolId, originalUrl, params } = req
    // * valida el rol
    const rolIsAdmin = rolId === 1 ? ';' : `where rol.id_rol = ${rolId};`
    const data = await sequelize.query(
      `select rol.id_usuario, rol.id_rol, clas.id_correlativo, clas.descripcion, clas.ruta_prefijo from idrolrecurso rol inner join idclasificador clas on clas.id_correlativo in (rol.id_rol, rol.id_recurso) and clas.id_prefijo = 6 ${rolIsAdmin}`
    )
    const rolFound = data[0]
    if (rolFound.length === 0) return res.status(403).json({ message: 'No se encontro ningun rol para este recurso' })

    let getRuta = originalUrl

    if (params)
      Object.entries(params).forEach(([key, value]) => {
        getRuta = getRuta.replace(`/${value}`, '')
      })
    req.rutaRecurso = getRuta

    // * valida ruta acceso rol
    let findEnpoint = rolFound.find((parm: any) => {
      return parm.ruta_prefijo === req.rutaRecurso
    })
    req.queryRecurso = findEnpoint

    if (!findEnpoint) return res.status(403).json({ message: 'No se encontro ningun ruta para el rol' })

    next()
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
}
