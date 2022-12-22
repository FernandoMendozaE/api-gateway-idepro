import { z } from 'zod'

// * Definicones
// ? z.object - definicion de un objeto en zod
// ? nonempty() - definicion de una propiedad con valor no vacio
// ? ZodError - definicion de un error en zod
// ? email - definicion de una propiedad con valor de email
// ? min - definicion de una propiedad con valor minimo
export const loginSchema = z.object({
  body: z.object({
    email: z.string().nonempty('Email is required').email('Writte a correct email'),
    password: z.string().nonempty('Password is required').min(6, 'Password too short')
  })
})
