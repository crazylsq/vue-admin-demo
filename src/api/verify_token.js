import request from '@/utils/request'

export function verifyToken (token) {
  return request({
    method: 'get',
    url: process.env.VerifyToken_API
  })
}
