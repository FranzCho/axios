import axios from 'axios';

const createInstance = () => {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL,
    timeout: 2000,
  })
  // instance.interceptors.request.use(request => {
  //   console.log(request)
  //   return request
  // }, error => {
  //   console.log(error)
  //   return Promise.reject(error)
  // })
  // instance.interceptors.response.use(response => {
  //   if (response.status === 200) {
  //     return response.data
  //   }
  //   return response
  // })
  return instance
}
export const instance = createInstance()
