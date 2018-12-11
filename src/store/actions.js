import { login } from '@/api/login'
import { setToken } from '@/utils/auth'

export default {
  Login ({ commit }, info) {
    return new Promise(function (resolve, reject) {
      login(info)
        .then(function (res) {
          if (res.status === 200) {
            commit('LOGIN', res.data.msg)
            setToken(res.data.msg)
            resolve(res)
          } else {
            resolve(res)
          }
        }).catch(function (error) {
          console.log(error)
          reject(error)
        })
    })
  }
}
