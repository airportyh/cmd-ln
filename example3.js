var cmdLn = require('./')

cmdLn(function(_url){
  var url = _url || 'http://google.com'
  console.log(url)
})