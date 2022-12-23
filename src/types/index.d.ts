export {}

declare global {
  namespace Express {
    interface Request {
      rolId: string
    }
  }
}
