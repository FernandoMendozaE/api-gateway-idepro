import dotenv from 'dotenv'
import { number } from 'zod'
dotenv.config()

export default {
  POSTGRES_DATABASE: process.env.POSTGRES_DATABASE || 'projectsdb',
  POSTGRES_USER: process.env.POSTGRES_USER || 'root',
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD || 'root',
  POSTGRES_HOST: process.env.POSTGRES_HOST || 'localhost',
  POSTGRES_PORT: (process.env.POSTGRES_PORT as unknown as number) || 5434,
  PORT: process.env.PORT || 3000,
  JWT_SECRET: process.env.JWT_SECRET || 'secret',
  BCRYPT_SALT_ROUNDS: process.env.BCRYPT_SALT_ROUNDS || 10,
  AUTH_USERNAME: 'wsIdepro',
  AUTH_PASSWORD: 'ws1d3pr0',
  JWT_TIME_EXPIRY: '24h',
  AUTH_VERSION: '2.0.0'
}
