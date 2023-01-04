import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import config from '../util/config'
import messageUtil from '../util/message.util'
import { UserModel } from '../model/User'
import { SingInBodySchema, SingUpBodySchema } from '../schemas/auth.schema'

// * Registro de usuario
export const signUp = async (req: Request<unknown, unknown, SingUpBodySchema, unknown>, res: Response) => {
  try {
    const { password, id_usuario, id_rol } = req.body
    const passwordHash = await bcrypt.hash(password, config.BCRYPT_SALT_ROUNDS)
    const data = passwordHash ? { ...req.body, password: passwordHash } : req.body
    await UserModel.create(data)

    const payload = {
      usuario: id_usuario,
      rol: id_rol,
      date: new Date()
    }
    const token = jwt.sign(payload, config.JWT_SECRET, {
      expiresIn: config.JWT_TIME_EXPIRY
    })

    return res.status(200).json({
      mensaje: messageUtil.MENSAJE_CORRECTO,
      status: messageUtil.STATUS_OK,
      data: {
        access_token: token,
        fecha: new Date().toLocaleString('en-US'),
        tiempo_expiracion: config.JWT_TIME_EXPIRY,
        version: config.AUTH_VERSION
      }
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

// * Login de usuario
export const signIn = async (req: Request<unknown, unknown, SingInBodySchema, unknown>, res: Response) => {
  try {
    const { usuario, password } = req.body
    const userFound = (await UserModel.findByPk(usuario)) as any
    if (!userFound) return res.status(401).json({ message: 'User not found' })

    const matchPassword = await bcrypt.compare(password, userFound.password)

    if (!matchPassword) return res.status(401).json({ message: 'Password incorrect' })

    const payload = {
      usuario: userFound.id_usuario,
      rol: userFound.id_rol,
      date: new Date()
    }

    const token = jwt.sign(payload, config.JWT_SECRET, {
      expiresIn: config.JWT_TIME_EXPIRY
    })

    return res.status(200).json({
      mensaje: messageUtil.MENSAJE_CORRECTO,
      status: messageUtil.STATUS_OK,
      data: {
        access_token: token,
        fecha: new Date().toLocaleString('en-US'),
        tiempo_expiracion: config.JWT_TIME_EXPIRY,
        version: config.AUTH_VERSION
      }
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
