import test from 'ava'
import execa from 'execa'

test(async t => {
  const name = `asdasfgrgafadsgaf${Math.random().toString().slice(2)}`
  const ret = await execa('./cli.js', [name], {cwd: __dirname})
  t.regex(ret.stdout, /is available/)
})
