/**
 * ? Archivo encargado de verificar el token
 */
import jwt from 'jsonwebtoken'
import config from '../util/config'
import { NextFunction, Request, Response } from 'express'
import constantUtil from '../util/constant.util'
interface JwtPayload {
  userId: string
}

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.header('authorization')

    if (!token) return res.status(403).json({ message: 'No token provided' }) // ? validar cabecera del token

    const decoded: any = jwt.verify(token, config.JWT_SECRET) as JwtPayload

    // console.log('decoded', decoded)
    req.params = decoded.rol

    next()
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorrize' }) // ? token no autorizado
  }
}

export const verifyTokenLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.header('Authorization')

    if (!token)
      return res.status(403).json({
        mensaje: constantUtil.MENSAJE_NO_AUTENTIFICADO,
        status: constantUtil.STATUS_NOK,
        data: {}
      })

    var auth = Buffer.from(token.split(' ')[1], 'base64').toString().split(':')
    if (auth[0] != config.AUTH_USERNAME && auth[1] != config.AUTH_PASSWORD)
      return res.status(403).json({
        mensaje: constantUtil.MENSAJE_ERROR_USUARIO_PASSWORD,
        status: constantUtil.STATUS_NOK,
        data: {}
      })

    next()
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorrize' }) // ? token no autorizado
  }
}
