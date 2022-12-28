import axios from 'axios'

export const getAxiosCarteraDigital = async (enpoint: string) => await axios.get(enpoint)
