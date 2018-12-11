import request from '@/utils/request'

export function login (info) {
  const data = JSON.stringify(info)
  return request({
    url: process.env.LOGIN_API,
    method: 'post',
    data
  })
}
