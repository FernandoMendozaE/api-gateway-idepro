import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database'
import { Task } from './Task'

export const Project = sequelize.define(
  'projects',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING
    },
    priority: {
      type: DataTypes.INTEGER
    },
    description: {
      type: DataTypes.STRING
    }
  },
  {
    timestamps: true
  }
)

// * Create model references for all tasks
Project.hasMany(Task, {
  foreignKey: 'projectId',
  sourceKey: 'id'
})

Task.belongsTo(Project, {
  foreignKey: 'projectId',
  targetKey: 'id'
})
