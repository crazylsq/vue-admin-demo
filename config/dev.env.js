'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  LOGIN_API: '"http://127.0.0.1:8080/do/login"',
  AddUSER_API: '"http://127.0.0.1:8080/user/add"',
  VerifyToken_API: '"http://127.0.0.1:8080/do/verifytoken"'
})
