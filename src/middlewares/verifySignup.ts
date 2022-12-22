import { NextFunction, Request, Response } from 'express'
import { any } from 'zod'
import { sequelize } from '../database/database'

// // * Verifica si existe usuario duplicado
// export const checkDuplicateEmail = async (
//   req: Request<unknown, unknown, SingUpBodySchema, unknown>,
//   res: Response,
//   next: NextFunction
// ) => {
//   const findUser = await User.findOne({
//     $or: [{ email: req.body.email }, { username: req.body.username }]
//   })
//   if (findUser) return res.status(400).json({ message: 'The email or username already exists' })

//   next()
// }

// * Verifica rol del usuario
export const isRole =
  (tipoRol: string) => async (req: Request, res: Response, next: NextFunction) => {
    // * valida el rol
    // const idRol = 4
    const data = await sequelize.query(
      `select * from idrolrecurso rol inner join idclasificador cla on cla.id_correlativo in (rol.id_rol, rol.id_recurso) and cla.id_prefijo = 6 where rol.id_rol = ${req.params}`
    )
    const result = data[0]

    let findEnpoint = null
    if (result.length > 0) {
      findEnpoint = result.find((parm: any) => {
        return parm.ruta_prefijo === req.originalUrl
      })
      console.log('findEnpoint', findEnpoint)
    }

    // console.log('req', req)
    // * valida ruta para el rol
    // const user = await User.findById(req.userId)
    // const roles = await Role.find({ _id: { $in: user?.roles } })

    // const roleFound = roles.find(role => role.name === tipoRol || role.name === 'admin')
    if (result.length > 0 && findEnpoint) return next()

    return res.status(401).json({
      message: `Require ${tipoRol} ${tipoRol === 'admin' ? 'role' : 'or admin role'} `
    })
  }
