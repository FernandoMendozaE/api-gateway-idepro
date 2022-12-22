import { Router } from 'express'
import { getProjects } from '../controllers/project.controller'

const router = Router()

// Routes
// router.post('/', createProject)
router.get('/projects', getProjects)
// router.put('/:id', updateProject)
// router.delete('/:id', deleteProject)
// router.get('/:id', getProject)

// router.get('/:id/tasks', getProjectTasks)

export default router
