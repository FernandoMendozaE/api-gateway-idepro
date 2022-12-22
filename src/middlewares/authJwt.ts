/**
 * ? Archivo encargado de verificar el token
 */
import jwt from 'jsonwebtoken'
import config from '../util/config'
import { NextFunction, Request, Response } from 'express'
interface JwtPayload {
  userId: string
}

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
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
