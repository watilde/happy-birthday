#!/usr/bin/env node
var program = require('commander')
var hb = require('./')
var pkg = require('./package.json')
var message = you = ''

program
  .version(pkg.version)
  .usage('-u name')
  .option('-u, --you [name]', 'Name')
  .parse(process.argv)

if (!program.you) return program.help()

you = program.you
message = hb(you)

console.log('\n')
console.log(message)
console.log('\n')
