#!/usr/bin/env node
'use strict';
const meow = require('meow');
const AsciiTable = require('./lib/table');
const _ = require('./lib/util');

const cli = meow(
  `
	Usage
	  $ asc2 

	Options
    --dec, -d ASCII digital code.
    --char, -c ASCII char code.

	Examples
	  $ asc2 -c A
`,
  {
    flags: {
      dec: {
        type: 'string',
        alias: 'd',
      },
      char: {
        type: 'string',
        alias: 'c',
      },
    },
  },
);

const { flags: opt } = cli;

if (_.isEmpty(opt)) {
  console.table(AsciiTable);
  return;
} else if (opt.char) {
  console.log(_.find(item => item.Char === opt.char.charAt(), AsciiTable).toString());
  return;
} else {
  const char = AsciiTable[opt.dec];
  if (char) {
    console.log(char.toString());
  }
  return;
}
