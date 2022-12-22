import { Clasificador } from '../model/Clasificador'
import { Request, Response } from 'express'

export async function getClasificador(req: Request, res: Response) {
  try {
    // throw new Error('project failed')
    const clasificador = await Clasificador.findAll({})
    // const projects = await Project.findAll({})
    res.json(clasificador)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        message: error.message
      })
    }
  }
}

// export async function createProject(req, res) {
//   const { name, priority, description, deliveryDate } = req.body
//   try {
//     // * Create a project
//     let newProject = await Project.create(
//       {
//         name,
//         priority,
//         description,
//         deliveryDate: new Date(deliveryDate).getTime()
//       },
//       {
//         fields: ['name', 'priority', 'description', 'deliverydate']
//       }
//     )
//     return res.json(newProject)
//   } catch (error) {
//     res.status(500).json({
//       message: error.message
//     })
//   }
//   res.json('received')
// }

// export async function getProject(req, res) {
//   const { id } = req.params
//   try {
//     const project = await Project.findOne({
//       where: {
//         id
//       }
//     })
//     res.json(project)
//   } catch (error) {
//     res.status(500).json({
//       message: error.message
//     })
//   }
// }

// export const updateProject = async (req, res) => {
//   try {
//     const { id } = req.params
//     const { name, priority, description } = req.body

//     const project = await Project.findByPk(id)
//     project.name = name
//     project.priority = priority
//     project.description = description
//     await project.save()

//     res.json(project)
//   } catch (error) {
//     return res.status(500).json({ message: error.message })
//   }
// }

// export async function deleteProject(req, res) {
//   const { id } = req.params
//   try {
//     await Task.destroy({
//       where: {
//         projectId: id
//       }
//     })
//     await Project.destroy({
//       where: {
//         id
//       }
//     })
//     return res.sendStatus(204)
//   } catch (error) {
//     return res.status(500).json({ message: error.message })
//   }
// }

// export async function getProjectTasks(req, res) {
//   const { id } = req.params
//   try {
//     const tasks = await Task.findAll({
//       attributes: ['id', 'projectId', 'name', 'done'],
//       where: { projectId: id }
//     })
//     res.json(tasks)
//   } catch (e) {
//     return res.status(500).json({ message: e.message })
//   }
// }
