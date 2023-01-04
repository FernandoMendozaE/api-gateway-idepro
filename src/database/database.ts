import { Sequelize } from 'sequelize'
import config from '../util/config'

// * Config database for the api service
export const sequelize = new Sequelize(config.POSTGRES_DATABASE, config.POSTGRES_USER, config.POSTGRES_PASSWORD, {
  host: config.POSTGRES_HOST,
  port: config.POSTGRES_PORT,
  dialect: 'postgres'
})

// * Connection database
;(async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync({ force: true })
    // const data = await sequelize.query(
    //   'select * from idrolrecurso rol inner join idclasificador cla on cla.id_correlativo in (rol.id_rol, rol.id_recurso) and cla.id_prefijo = 6 where rol.id_rol = 4'
    // )
    // const result: any = data[1]
    // console.log('result:', result.rows)
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.log(error)
  }
})()
