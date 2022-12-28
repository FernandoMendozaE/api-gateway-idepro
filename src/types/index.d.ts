export {}

declare global {
  namespace Express {
    interface Request {
      rolId: integer
      rutaRecurso: string
    }
  }
}
