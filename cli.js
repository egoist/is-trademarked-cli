#!/usr/bin/env node
'use strict'
const meow = require('meow')
const ora = require('ora')
const isTrademarked = require('is-trademarked')
const logSymbols = require('log-symbols')

const spinner = ora()

const cli = meow(`
  Usage:

    is-trademarked <word>

    -v/--version    Print version
    -h/--help       Print help
`)

const word = cli.input[0]

if (!word) {
  console.error('A word is required')
  process.exit(1)
}

spinner.start()
isTrademarked(word)
  .then(trademarked => {
    spinner.stop()
    console.log(
      trademarked ?
      `${logSymbols.error} ${word} is a trademark` :
      `${logSymbols.success} ${word} is available`
    )
  })
  .catch(e => {
    spinner.stop()
    console.log(e.stack)
  })
