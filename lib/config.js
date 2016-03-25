'use strict'
const Configstore = require('configstore')
const pkg = require('../package')

module.exports = new Configstore(pkg.name)
