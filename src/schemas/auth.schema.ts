import { z } from 'zod'

export const AuthSingUpSchema = z.object({
  body: z
    .object({
      id_usuario: z.string().min(3).max(5),
      password: z.string().min(6, 'Password too short'),
      nombre: z.string().min(3).max(50),
      descripcion: z.string(),
      correo: z.string().email('Writte a correct email'),
      add_user: z.string().min(3).max(5),
      id_rol: z.number().positive(),
      estado: z.boolean()
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
