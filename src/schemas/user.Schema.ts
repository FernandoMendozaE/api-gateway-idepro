import { z } from 'zod'

export const GetOrDeleteUserSchema = z.object({
  params: z.object({
    id: z.string({ invalid_type_error: 'Invalid id' })
  })
})

export const UpdateUserSchema = z.object({
  body: z
    .object({
      id_usuario: z.string().min(3).max(5).optional(),
      password: z.string().min(6, 'Password too short').optional(),
      nombre: z.string().min(3).max(50).optional(),
      descripcion: z.string().optional(),
      correo: z.string().email('Writte a correct email').optional(),
      add_user: z.string().min(3).max(5).optional(),
      id_rol: z.number().positive().optional(),
      estado: z.boolean().optional()
    })
    .strict(),
  params: z.object({
    id: z.string({ invalid_type_error: 'Invalid id' })
  })
})

export type GetOrDeleteUserParamsType = z.infer<typeof GetOrDeleteUserSchema>['params']

export type UpdateUserBodyType = z.infer<typeof UpdateUserSchema>['body']
export type UpdateUserParamsType = z.infer<typeof UpdateUserSchema>['params']
