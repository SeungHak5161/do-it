import { AxiosInstance } from 'axios'

const setResponse = (service: AxiosInstance) => {
  service.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      return Promise.reject(error)
    },
  )
}
export default setResponse
