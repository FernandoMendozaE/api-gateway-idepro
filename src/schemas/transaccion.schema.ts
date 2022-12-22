import { z } from 'zod'

export const GetConsultaCuota = z.object({
  body: z
    .object({
      entidad: z.enum(['IDEPRO', 'BCP', 'SINTESIS']),
      usuario: z.nullable(z.string()).optional(),
      contraseña: z.nullable(z.string()).optional(),
      cod_servicio: z.literal('consulta-pago'),
      codigo_busqueda: z.string().min(3).max(15)
    })
    .strict()
})

export const GetPago = z.object({
  body: z
    .object({
      entidad: z.enum(['IDEPRO', 'BCP', 'SINTESIS']),
      usuario: z.nullable(z.string()).optional(),
      contraseña: z.nullable(z.string()).optional(),
      cod_servicio: z.literal('pago-credito'),
      id_transaccion: z
        .string()
        .min(5, { message: 'Debe tener 5 o más caracteres' }),
      fecha_pago: z
        .string()
        .regex(/^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/, {
          message: 'Fecha invalido (formato correcto dd/mm/aa)'
        }),
      codigo_busqueda: z.string().min(3).max(15),
      monto_total: z.string().min(3).max(15)
    })
    .strict()
})

export const GetReversion = z.object({
  body: z
    .object({
      entidad: z.enum(['IDEPRO', 'BCP', 'SINTESIS']),
      usuario: z.nullable(z.string()),
      contraseña: z.nullable(z.string()),
      cod_servicio: z.literal('reversion-pago'),
      codigo_busqueda: z.string().min(3).max(15).optional(),
      id_transaccion_empresa: z
        .string()
        .min(5, { message: 'Debe tener 5 o más caracteres' }),
      id_reversion: z
        .string()
        .min(8, { message: 'Debe tener 8 o más caracteres' }),
      fecha_reversion: z
        .string()
        .regex(/^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/, {
          message: 'Fecha invalido (formato correcto dd/mm/aa)'
        })
    })
    .strict()
})
export type UpdateUserBodyType = z.infer<typeof GetConsultaCuota>['body']
