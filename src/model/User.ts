import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database'

export const UserModel = sequelize.define(
  'iduser',
  {
    id_usuario: {
      type: DataTypes.STRING(25),
      primaryKey: true,
      unique: true
    },
    password: {
      type: DataTypes.STRING
    },
    nombre: {
      type: DataTypes.STRING(100)
    },
    descripcion: {
      type: DataTypes.STRING(255)
    },
    correo: {
      type: DataTypes.STRING(50)
    },
    add_user: {
      type: DataTypes.STRING(25)
    },
    id_rol: {
      type: DataTypes.INTEGER
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
