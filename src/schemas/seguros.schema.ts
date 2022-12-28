import { z } from 'zod'

export const GetSegurosUserPrestamoSchema = z.object({
  params: z.object({
    usuario: z.string({ invalid_type_error: 'Invalid usuario' }),
    numeroPrestamo: z.string({ invalid_type_error: 'Invalid número de prestamo' })
  })
})

export const GetSegurosUserDocumentoSchema = z.object({
  params: z.object({
    usuario: z.string({ invalid_type_error: 'Invalid usuario' }),
    numeroDocumento: z.string({ invalid_type_error: 'Invalid número de documento' })
  })
})

export const GetSegurosFechaInicialFinalSchema = z.object({
  params: z.object({
    dateInicio: z
      .string({ invalid_type_error: 'Invalid fecha inicio' })
      .regex(/^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/, {
        message: 'Fecha invalido (formato correcto dd/mm/aa)'
      }),
    dateFinal: z
      .string({ invalid_type_error: 'Invalid fecha final' })
      .regex(/^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/, {
        message: 'Fecha invalido (formato correcto dd/mm/aa)'
      })
  })
})

export type GetSegurosUserPrestamoSchemaParamsType = z.infer<typeof GetSegurosUserPrestamoSchema>['params']
export type GetSegurosUserDocumentoSchemaParamsType = z.infer<typeof GetSegurosUserDocumentoSchema>['params']
export type GetSegurosFechaInicialFinalSchemaParamsType = z.infer<typeof GetSegurosFechaInicialFinalSchema>['params']
