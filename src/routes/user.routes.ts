import { verifyToken } from '../middlewares/authJwt'
import { isRole } from '../middlewares/verifyRolRecurso'
import { Router } from 'express'
const router = Router()

import {
  getUserList,
  getUser,
  createUser,
  deleteUser,
  updateUser,
  validateUser
} from '../controllers/user.controller'

router.get('/', [verifyToken, isRole], getUserList)
router.get('/:id', verifyToken, getUser)
router.post('/', verifyToken, createUser)
router.delete('/:id', verifyToken, deleteUser)
router.put('/', verifyToken, updateUser)
router.post('/login', validateUser)

export default router
