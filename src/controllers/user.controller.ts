import { Request, Response } from 'express'
import { UserModel } from '../model/User'
import { GetOrDeleteUserParamsType, UpdateUserBodyType, UpdateUserParamsType } from '../schemas/user.Schema'
import constantUtil from '../util/constant.util'
import bcrypt from 'bcrypt'
import config from '../util/config'

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserModel.findAll()
    if (users.length > 0) {
      res.json({
        mensaje: constantUtil.MENSAJE_CORRECTO,
        estado: constantUtil.STATUS_OK,
        data: users
      })
    } else {
      res.json({
        mensaje: constantUtil.MENSAJE_SIN_REGISTRO,
        estado: constantUtil.STATUS_OK,
        data: {}
      })
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
}

export const getUser = async (req: Request<GetOrDeleteUserParamsType, unknown, unknown, unknown>, res: Response) => {
  try {
    const { id } = req.params
    const user = await UserModel.findByPk(id)
    if (user) {
      res.status(200).json({
        mensaje: constantUtil.MENSAJE_CORRECTO,
        estado: constantUtil.STATUS_OK,
        data: user
      })
    } else {
      res.status(404).json({
        mensaje: constantUtil.MENSAJE_SIN_REGISTRO,
        estado: constantUtil.STATUS_OK,
        data: {}
      })
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
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
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
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
      mensajeRespuesta = constantUtil.MENSAJE_CORRECTO
    } else {
      mensajeRespuesta = constantUtil.MENSAJE_SIN_REGISTRO
    }
    res.json({
      mensaje: mensajeRespuesta,
      estado: constantUtil.STATUS_OK,
      data: {}
    })
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
}
