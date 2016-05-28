#!/usr/bin/env node
var fs = require('fs')
var updateNotifier = require('update-notifier')
var program = require('commander')
var Speaker = require('speaker')
var pkg = require('../package.json')
var Chiptune = require('../lib/index')
var chiptune = new Chiptune(new Speaker())

updateNotifier({
  packageName: pkg.name,
  packageVersion: pkg.version
}).notify()

program
  .version(pkg.version)
  .usage('<command>')

program
  .command('play [file]')
  .description('Put specified config file in the chest')
  .action(function (file) {
    var mml = fs.readFileSync(file, 'utf8')
    chiptune.play(mml)
  })

program.parse(process.argv)

if (program.args.length === 0) program.help()
