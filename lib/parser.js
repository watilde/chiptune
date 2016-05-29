module.exports = function (mml) {
  var list = mml.replace(/\s/g, '').split(';')
  list.forEach(function (item){
    console.log(item)
  })
}
