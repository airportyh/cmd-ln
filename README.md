cmd-ln
======

Converts command-line arguments to function arguments - for simple CLI programs.

## Install

```
npm install cmd-ln
```

## Usage

`program`:

```js
#! /usr/bin/env node
var cmdLn = require('cmd-ln')

cmdLn(function(action, subject){
  console.log('I am going to do', action, 'with', subject + '.')
})
```

Running that and get.

```
$ program make lemonade
I am going to do make with lemonade.
$ program make
Usage: program <action> <subject>
$ program
Usage: program <action> <subject>
```

## Optional Parameters

You can specify optional parameters using a leading underscore:

```js
cmdLn(function(_url){
  var url = _url || 'http://google.com'
  console.log(url)
})
```