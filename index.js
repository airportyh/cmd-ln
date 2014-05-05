var path = require('path')

module.exports = function(fn){
  var params = getParams(fn)
  validateOptionalParamsOnlyAtTheEnd(params)
  var requiredParams = params.filter(not(isOptional))
  var optionalParams = params.filter(isOptional)
  var actualParams = process.argv.slice(2)

  if (requiredParams.length > actualParams.length){
    printUsage(requiredParams, optionalParams)
  }else{
    fn.apply(null, actualParams)
  }
}

function not(fn){
  return function(){
    return !fn.apply(null, arguments)
  }
}

function printUsage(requiredParams, optionalParams){
  var executable = path.basename(process.argv[1])
    console.log('Usage: ' + executable + ' ' +
      requiredParams.map(function(param){
        return '<' + param + '>'
      }).concat(
        optionalParams.map(function(param){
          return '[' + param.substring(1) + ']'
        })
      ).join(' ')
      )
    process.exit(1)
}

function validateOptionalParamsOnlyAtTheEnd(params){
  var hasSeenOptional = false
  for (var i = 0; i < params.length; i++){
    if (isOptional(params[i])){
      hasSeenOptional = true
    }else{
      if (hasSeenOptional){
        throw new Error('Optional params must be listed at the end')
      }else{
        // skip
      }
    }
  }
}

function isOptional(param){
  return param.charAt(0) === '_'
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