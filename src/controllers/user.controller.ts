import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { UserModel } from '../model/User'
import constantUtil from '../util/constant.util'
import config from '../util/config'
import { Request, Response } from 'express'

export async function getUserList(req: Request, res: Response) {
  try {
    const userList = await UserModel.findAll()
    if (userList.length > 0) {
      res.json({
        mensaje: constantUtil.MENSAJE_CORRECTO,
        estado: constantUtil.STATUS_OK,
        data: userList
      })
    } else {
      res.json({
        mensaje: constantUtil.MENSAJE_SIN_REGISTRO,
        estado: constantUtil.STATUS_OK,
        data: {}
      })
    }
  } catch (e) {
    console.error(e)
    res.json({
      mensaje: constantUtil.MENSAJE_ERROR,
      estado: constantUtil.STATUS_NOK,
      data: {}
    })
  }
}

export async function getUser(req: Request, res: Response) {
  const { id } = req.params
  console.log(req.params)
  try {
    const user = await UserModel.findByPk(id)
    console.log(user)

    if (user) {
      res.json({
        mensaje: constantUtil.MENSAJE_CORRECTO,
        estado: constantUtil.STATUS_OK,
        data: user
      })
    } else {
      res.json({
        mensaje: constantUtil.MENSAJE_SIN_REGISTRO,
        estado: constantUtil.STATUS_OK,
        data: {}
      })
    }
  } catch (e) {
    console.error(e)
    res.json({
      mensaje: constantUtil.MENSAJE_ERROR,
      estado: constantUtil.STATUS_NOK,
      data: {}
    })
  }
}

export async function createUser(req: Request, res: Response) {
  const { usuario, password, nombre, descripcion, correo, add_user, estado, id_rol } = req.body

  const swUser = await UserModel.findByPk(usuario)

  if (!swUser) {
    try {
      var fecha = new Date()
      var hora = fecha.getHours() + ':' + fecha.getMinutes() + ':' + fecha.getSeconds()
      const passwordHash = await bcrypt.hash(password, config.BCRYPT_SALT_ROUNDS)

      const user = await UserModel.create({
        usuario,
        password: passwordHash,
        nombre,
        descripcion,
        correo,
        add_user,
        add_date: fecha,
        add_hora: hora,
        add_user_update: null,
        add_date_update: null,
        estado,
        id_rol
      })
      if (user) {
        return res.json({
          mensaje: constantUtil.MENSAJE_CORRECTO,
          estado: constantUtil.STATUS_OK,
          data: user
        })
      }
    } catch (e) {
      console.log(e)
      res.status(500).json({
        mensaje: constantUtil.MENSAJE_ERROR,
        estado: constantUtil.STATUS_NOK,
        data: {}
      })
    }
  } else {
    return res.json({
      mensaje: constantUtil.MENSAJE_ERROR_PK,
      estado: constantUtil.STATUS_NOK,
      data: {}
    })
  }
}

export async function deleteUser(req: Request, res: Response) {
  var mensajeRespuesta = ''
  try {
    const { id } = req.params
    const count = await UserModel.destroy({
      where: { usuario: id }
    })

    if (count > 0) {
      mensajeRespuesta = constantUtil.MENSAJE_CORRECTO
    } else {
      mensajeRespuesta = constantUtil.MENSAJE_SIN_REGISTRO
    }
    res.json({
      mensaje: mensajeRespuesta,
      estado: constantUtil.STATUS_OK,
      data: {}
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

export async function updateUser(req: Request, res: Response) {
  const idUser = req.body.usuario
  const { nombre, password, add_user } = req.body

  try {
    const user = await UserModel.findByPk(idUser)

    if (user) {
      const passwordHash = await bcrypt.hash(password, config.BCRYPT_SALT_ROUNDS)
      await user.update({ nombre, password: passwordHash, add_date: new Date(), add_user })
      res.json({
        mensaje: constantUtil.MENSAJE_CORRECTO,
        status: constantUtil.STATUS_OK,
        data: user
      })
    } else {
      res.json({
        mensaje: constantUtil.MENSAJE_SIN_REGISTRO,
        status: constantUtil.STATUS_NOK,
        data: {}
      })
    }
  } catch (e) {
    console.error(e)
    res.json({
      mensaje: constantUtil.MENSAJE_ERROR,
      status: constantUtil.STATUS_NOK,
      data: {}
    })
  }
}

export const validateUser = async (req: Request<unknown, unknown, any, unknown>, res: Response) => {
  let authheader = req.headers.authorization as string
  console.log(req.headers)

  if (!authheader) {
    res.json({
      mensaje: constantUtil.MENSAJE_NO_AUTENTIFICADO,
      status: constantUtil.STATUS_NOK,
      data: {}
    })
  }

  var auth = Buffer.from(authheader.split(' ')[1], 'base64').toString().split(':')
  var user = auth[0]
  var pass = auth[1]

  if (user == config.AUTH_USERNAME && pass == config.AUTH_PASSWORD) {
    const { usuario, password } = req.body
    const user = (await UserModel.findByPk(usuario)) as any

    if (user) {
      const sw = await bcrypt.compare(password, user.password)

      if (sw) {
        //jwt
        const payload = {
          usuario: user.usuario,
          rol: user.id_rol,
          date: new Date()
        }

        var token = jwt.sign(payload, config.JWT_SECRET, {
          expiresIn: config.JWT_TIME_EXPIRY
        })

        res.json({
          mensaje: constantUtil.MENSAJE_CORRECTO,
          status: constantUtil.STATUS_OK,
          data: {
            access_token: token,
            // usuario: user.usuario,
            fecha: new Date().toLocaleString('en-US'),
            tiempo_expiracion: config.JWT_TIME_EXPIRY,
            version: config.AUTH_VERSION
          }
        })
      } else {
        res.json({
          mensaje: constantUtil.MENSAJE_ERROR_USUARIO_PASSWORD,
          status: constantUtil.STATUS_NOK,
          data: {}
        })
      }
    } else {
      res.json({
        mensaje: constantUtil.MENSAJE_ERROR_USUARIO_PASSWORD,
        status: constantUtil.STATUS_NOK,
        data: {}
      })
    }
  } else {
    res.json({
      mensaje: constantUtil.MENSAJE_ERROR_USUARIO_PASSWORD,
      status: constantUtil.STATUS_NOK,
      data: {}
    })
  }
}
