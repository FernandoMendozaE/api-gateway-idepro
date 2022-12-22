import { Router } from 'express'
import { login } from '../controllers/auth.controller'
import { schemaValition } from '../middlewares/schemaValidator.middleware'
import { loginSchema } from '../schemas/auth.schema'
import { signIn, signUp, validateUser } from '../controllers/auth.controller'

const router = Router()

router.post('/login', schemaValition(loginSchema), login)

router.post('/signup', signUp)
router.post('/signin', signIn)

router.post('/inlogin', validateUser)

export default router
