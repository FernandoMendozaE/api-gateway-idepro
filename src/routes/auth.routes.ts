import { Router } from 'express'
import { schemaValition } from '../middlewares/schemaValidator.middleware'
import { signIn } from '../controllers/auth.controller'
import { AuthSingInSchema } from '../schemas/auth.schema'
import { verifyTokenLogin } from '../middlewares/authJwt'

const router = Router()

// router.post('/login', schemaValition(loginSchema), login)

// router.post('/signup', signUp)
router.post(
  '/signin',
  schemaValition(AuthSingInSchema),
  [verifyTokenLogin],
  signIn
)

export default router
