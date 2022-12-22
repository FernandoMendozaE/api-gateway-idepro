import { z } from 'zod'

export const AuthSingUpSchema = z.object({
  body: z
    .object({
      username: z.string().min(3).max(20),
      firstname: z.string().nonempty().min(3).max(50),
      lastname: z.string().nonempty().min(3).max(50),
      email: z
        .string()
        .nonempty('Email is required')
        .email('Writte a correct email'),
      password: z
        .string()
        .nonempty('Password is required')
        .min(6, 'Password too short'),
      roles: z.enum(['user', 'moderator', 'admin']).array().min(1)
    })
    .strict()
})

export const AuthSingInSchema = z.object({
  body: z
    .object({
      usuario: z
        .string()
        .min(3, { message: 'Debe tener entre 3 a 5 caracteres' })
        .max(5, { message: 'Debe tener entre 3 a 5 caracteres' }),
      password: z.string().min(5, { message: 'Debe tener 5 o más caracteres' })
    })
    .strict()
})

export type SingUpBodySchema = z.infer<typeof AuthSingUpSchema>['body']

export type SingInBodySchema = z.infer<typeof AuthSingInSchema>['body']
