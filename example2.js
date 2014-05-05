
var cmdLn = require('./')

cmdLn(function(action, _number){
  if (action === 'print'){
    _number = _number ? Number(_number) : 1
    for (var i = 0; i < _number; i++){
      console.log('Hello, world!')
    }
  }else{
    console.log('Unknown action:', action)
  }
})