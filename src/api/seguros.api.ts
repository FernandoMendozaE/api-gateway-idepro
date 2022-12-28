import axios from 'axios'

export const getAxiosSeguros = async (enpoint: string) => await axios.get(enpoint)
