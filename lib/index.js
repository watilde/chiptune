var AudioContext = require('web-audio-engine').StreamAudioContext
var parser = require('./parser')

function chiptune (pipe) {
  var context = global.__audioContext__ || new AudioContext

  if (pipe) context.pipe(pipe)
  context.resume()
}

chiptune.prototype.play = function (mml) {
  parser(mml)
}

module.exports = chiptune
