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
    --string, -s Iterate each character. 

	Examples
	  $ asc2 -c A
`,
  {
    flags: {
      dec: {
        type: 'string',
        alias: 'd'
      },
      char: {
        type: 'string',
        alias: 'c'
      },
      string: {
        type: 'string',
        alias: 's'
      }
    }
  }
);

const { flags: opt } = cli;

if (_.isEmpty(opt)) {
  console.table(AsciiTable);
  return;
}

if (opt.char) {
  console.log(_.find(item => item.Char === opt.char.charAt(), AsciiTable).toString());
  return;
}

if (opt.string) {
  [...opt.string].forEach(c =>
    console.log(_.find(item => item.Char === c.charAt(), AsciiTable).toString())
  );
  return;
}

if (opt.dec) {
  const char = AsciiTable[opt.dec];
  if (char) {
    console.log(char.toString());
  }
  return;
}
