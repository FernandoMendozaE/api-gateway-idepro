import { Request, Response } from 'express'
import { UserModel } from '../model/User'
import { RolesModel } from '../model/Roles'
import { GetOrDeleteUserParamsType, UpdateUserBodyType, UpdateUserParamsType } from '../schemas/user.Schema'
import messageUtil from '../util/message.util'
import bcrypt from 'bcrypt'
import config from '../util/config'

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserModel.findAll()
    const rol = await RolesModel.findAll()
    if (users.length > 0) {
      res.status(200).json({
        mensaje: messageUtil.MENSAJE_CORRECTO,
        estado: messageUtil.STATUS_OK,
        data: users
      })
    } else {
      res.status(404).json({
        mensaje: messageUtil.MENSAJE_SIN_REGISTRO,
        estado: messageUtil.STATUS_OK,
        data: {}
      })
    }
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

export const getUser = async (req: Request<GetOrDeleteUserParamsType, unknown, unknown, unknown>, res: Response) => {
  try {
    const { id } = req.params
    const user = await UserModel.findByPk(id)
    if (user) {
      res.status(200).json({
        mensaje: messageUtil.MENSAJE_CORRECTO,
        estado: messageUtil.STATUS_OK,
        data: user
      })
    } else {
      res.status(404).json({
        mensaje: messageUtil.MENSAJE_SIN_REGISTRO,
        estado: messageUtil.STATUS_OK,
        data: {}
      })
    }
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

export const updateUser = async (
  req: Request<UpdateUserParamsType, unknown, UpdateUserBodyType, unknown>,
  res: Response
) => {
  try {
    const { password } = req.body
    const user = await UserModel.findByPk(req.params.id)
    if (user) {
      const passwordHash = password ? await bcrypt.hash(password, config.BCRYPT_SALT_ROUNDS) : null
      const data = passwordHash ? { ...req.body, password: passwordHash } : req.body
      await user.update(data)
      res.status(200).json({
        mensaje: messageUtil.MENSAJE_CORRECTO,
        status: messageUtil.STATUS_OK,
        data: user
      })
    } else {
      res.status(404).json({
        mensaje: messageUtil.MENSAJE_SIN_REGISTRO,
        status: messageUtil.STATUS_NOK,
        data: {}
      })
    }
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

export const deleteUser = async (req: Request<UpdateUserParamsType, unknown, unknown, unknown>, res: Response) => {
  try {
    let mensajeRespuesta = ''
    const { id } = req.params
    const count = await UserModel.destroy({
      where: { id_usuario: id }
    })

    if (count > 0) {
      mensajeRespuesta = messageUtil.MENSAJE_CORRECTO
    } else {
      mensajeRespuesta = messageUtil.MENSAJE_SIN_REGISTRO
    }
    res.status(200).json({
      mensaje: mensajeRespuesta,
      estado: messageUtil.STATUS_OK,
      data: {}
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
