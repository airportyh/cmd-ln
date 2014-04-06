var path = require('path')

module.exports = function(fn){
  var params = getParams(fn)
  if (params.length !== process.argv.length - 2){
    var executable = path.basename(process.argv[1])
    console.log('Usage: ' + executable + ' ' +
      params.map(function(param){
        return '<' + param + '>'
      }).join(' '))
    process.exit(1)
  }else{
    fn.apply(null, process.argv.slice(2))
  }
}

// from <http://stackoverflow.com/questions/1007981/how-to-get-function-parameter-names-values-dynamically-from-javascript>
var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
function getParams(func) {
  var fnStr = func.toString().replace(STRIP_COMMENTS, '')
  var result = fnStr.slice(fnStr.indexOf('(')+1, fnStr.indexOf(')')).match(/([^\s,]+)/g)
  if(result === null)
     result = []
  return result
}