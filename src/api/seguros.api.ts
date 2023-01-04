import axios from 'axios'
import * as https from 'https'

const httpsAgent = new https.Agent({
  rejectUnauthorized: false
})

export const getAxiosSeguros = async (enpoint: string) => await axios.get(enpoint, { httpsAgent })
