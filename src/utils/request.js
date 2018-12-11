import axios from 'axios'
// import store from '@/store'
import router from '@/router'
import { getToken } from '@/utils/auth'

const service = axios.create({
  timeout: 5000
})

// service.interceptors.request.use(
//   console.log('tag4', 'xxx', store.state.token),
//   function (config) {
//     if (store.state.token) {
//       config.headers['Authorization'] = getToken()
//     }
//     return config
//   }, function (error) {
//     console.log(error)
//     // ES6语法, 将Promise对象的状态变为失败
//     Promise.reject(error)
//   }
// )

// 箭头函数类型的请求拦截器
service.interceptors.request.use(
  config => {
    let token = getToken()
    if (token) {
      config.headers['Authorization'] = token
    }
    return config
  }, error => {
    Promise.reject(error)
  }
)

// service.interceptors.response.use(
//   function (response) {
//     return response
//   }, function (error) {
//     if (error.response) {
//       switch (error.response.status) {
//         case 401:
//           this.$router.replace({
//             path: 'login',
//             query: {
//               redirect: this.$router.currentRoute.fullPath
//             }
//           })
//       }
//     }
//   }
// )

// 箭头函数类型的响应拦截器
service.interceptors.response.use(
  response => {
    return response
  }, error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          router.replace({
            path: '/login',
            query: { redirect: router.currentRoute.fullPath }
          })
      }
    }
    return Promise.reject(error.response)
  }
)

export default service
