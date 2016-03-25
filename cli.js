#!/usr/bin/env node
'use strict'
const meow = require('meow')
const ora = require('ora')
const isTrademarked = require('is-trademarked')
const logSymbols = require('log-symbols')
const chalk = require('chalk')
const updateNotifier = require('update-notifier')

const cli = meow(`
  Usage:

    is-trademarked <word>

    -v/--version    Print version
    -h/--help       Print help
`, {
  alias: {
    v: 'version',
    h: 'help'
  },
  string: ['_']
})

updateNotifier({pkg: cli.pkg}).notify()

const word = cli.input.join(' ')

if (!word) {
  console.error('A word is required')
  process.exit(1)
}

const spinner = ora()
spinner.start()

isTrademarked(word)
  .then(trademarks => {
    spinner.stop()
    if (!trademarks) {
      return console.log(`${logSymbols.success} ${word} is available`)
    }
    trademarks.forEach(t => {
      console.log(
        `${chalk.cyan(t.wordmark)} is a trademark reg in ${t.reg.getFullYear()}\n` +
        chalk.gray(t.description)
      )
    })
  })
  .catch(e => {
    spinner.stop()
    console.log(e.stack)
    process.exit(1)
  })
