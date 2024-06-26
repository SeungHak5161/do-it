const setResponse = (service) => {
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
