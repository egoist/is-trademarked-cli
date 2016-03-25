'use strict'
const logSymbols = require('log-symbols')
const config = require('./config')

const token = module.exports = {}

token.set = function (token) {
  config.set('token', token)
  console.log(`${logSymbols.success} Using token ${token} now.`)
}

token.get = function () {
  return config.get('token')
}
