import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import config from '../util/config'
import constantUtil from '../util/constant.util'
import { UserModel } from '../model/User'
import { Buffer } from 'buffer'
import { SingInBodySchema, SingUpBodySchema } from '../schemas/auth.schema'

export const login = (req: Request, res: Response) => {
  try {
    console.log(req.body)
    res.send('login')
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' })
  }
}

// * Registro de usuario
export const signUp = async (
  req: Request<unknown, unknown, any, unknown>,
  res: Response
) => {
  try {
    const {
      usuario,
      password,
      nombre,
      descripcion,
      correo,
      add_user,
      estado,
      id_rol
    } = req.body
    // const newUser = new UserModel({
    //   username,
    //   firstname,
    //   lastname,
    //   email,
    //   password
    // })
    // const foundRoles = await RolModel.find({ name: { $in: roles } }) // ? find encuentra uno o mas roles, $in es un array de roles que estan dentro de roles
    // newUser.roles = foundRoles.map(role => role._id)
    // await newUser.save()

    const token = jwt.sign({ userId: 12 }, config.JWT_SECRET, {
      expiresIn: '20d'
    })

    var fecha = new Date()
    var hora =
      fecha.getHours() + ':' + fecha.getMinutes() + ':' + fecha.getSeconds()
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

    res.status(200).json({ token })
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
}

// * Login de usuario
export const signIn = async (
  req: Request<unknown, unknown, SingInBodySchema, unknown>,
  res: Response
) => {
  try {
    const { usuario, password } = req.body
    const userFound = (await UserModel.findByPk(usuario)) as any
    if (!userFound) return res.status(401).json({ message: 'User not found' })

    const matchPassword = await bcrypt.compare(password, userFound.password)

    if (!matchPassword)
      return res.status(401).json({ message: 'Password incorrect' })

    const payload = {
      usuario: userFound.id_usuario,
      rol: userFound.id_rol,
      date: new Date()
    }

    const token = jwt.sign(payload, config.JWT_SECRET, {
      expiresIn: config.JWT_TIME_EXPIRY
    })

    return res.status(200).json({
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
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
}

export const validateUser = async (
  req: Request<unknown, unknown, any, unknown>,
  res: Response
) => {
  let authheader = req.headers.authorization as string
  console.log(req.headers)

  if (!authheader) {
    res.json({
      mensaje: constantUtil.MENSAJE_NO_AUTENTIFICADO,
      status: constantUtil.STATUS_NOK,
      data: {}
    })
  }

  var auth = Buffer.from(authheader.split(' ')[1], 'base64')
    .toString()
    .split(':')
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
          usuario: user.id_usuario,
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
