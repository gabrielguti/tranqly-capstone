import axios from 'axios'

const api = axios.create({
    baseURL: 'https://testes-laudemir.herokuapp.com',
})
export default api
