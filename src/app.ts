import express from 'express'
import config from './util/config'
import morgan from 'morgan'
import cors from 'cors'
import authRoutes from './routes/auth.routes'
import userRoutes from './routes/user.routes'
import clasificadorRoutes from './routes/clasificador.routes'
import pagocreditoRoutes from './routes/transaccion.routes'
import carteradigitalRoutes from './routes/carpeta-digital.routes'
import segurosRoutes from './routes/seguros.routes'

const app = express()

// * Config file for express server and client
app.set('port', config.PORT)
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//* Router
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)

app.use(clasificadorRoutes)

// ? API
app.use('/api/transaccion', pagocreditoRoutes)
app.use('/api/carteradigital', carteradigitalRoutes)
app.use('/api/seguros', segurosRoutes)

export default app // ! exportando app
