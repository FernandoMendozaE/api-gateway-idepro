import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database'

export const RolesModel = sequelize.define(
  'idrolrecurso',
  {
    id_rol: {
      type: DataTypes.INTEGER
    },
    id_recurso: {
      type: DataTypes.INTEGER
    },
    id_usuario: {
      type: DataTypes.STRING(50)
    },
    add_user: {
      type: DataTypes.STRING(25)
    },
    estado: {
      type: DataTypes.BOOLEAN
    }
  },
  {
    freezeTableName: true,
    timestamps: true
  }
)

RolesModel.removeAttribute('id')
