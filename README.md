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

cmdLn(function(foo, bar){
  console.log('I am going to do', foo, 'with', bar + '.')
})
```

Running that and get.

```
$ program make lemonade
I am going to do make with lemonade.
$ program make
Usage: program <foo> <bar>
$ program
Usage: program <foo> <bar>
```

