import { Router } from 'express'
import { getClasificador } from '../controllers/clasificador.controller'

const router = Router()

// Routes
// router.post('/', createProject)
router.get('/clasificador', getClasificador)
// router.put('/:id', updateProject)
// router.delete('/:id', deleteProject)
// router.get('/:id', getProject)

// router.get('/:id/tasks', getProjectTasks)

export default router
