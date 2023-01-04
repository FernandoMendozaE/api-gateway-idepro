import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database'

export const LogModel = sequelize.define(
  'idlog',
  {
    id_log: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
      // autoIncrement: true
      //   unique: true
    },
    id_usuario: {
      type: DataTypes.STRING(25)
    },
    nombre_metodo: {
      type: DataTypes.STRING(255)
    },
    method: {
      type: DataTypes.STRING(20)
    },
    endpoint: {
      type: DataTypes.STRING(100)
    },
    estado: {
      type: DataTypes.STRING(25)
    },
    cod_estado: {
      type: DataTypes.STRING(50)
    },
    request: {
      type: DataTypes.JSON
    },
    response: {
      type: DataTypes.JSON
    },
    datos_adicionales: {
      type: DataTypes.JSON
    },
    time_response: {
      type: DataTypes.STRING
    }
  },
  {
    freezeTableName: true,
    timestamps: true
  }
)
