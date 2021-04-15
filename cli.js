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
    --dec, -d find ASCII with digital code.
    --char, -c find ASCII with char code.
    --oct, -o find ASCII with oct code.
    --hex, -h find ASCII with hex code.
    --bin, -b find ASCII with binary code.
    --string, -s Iterate each character ASCII . 

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
      oct: {
        type: 'string',
        alias: 'o'
      },
      hex: {
        type: 'string',
        alias: 'h'
      },
      bin: {
        type: 'string',
        alias: 'b'
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

if (opt.string) {
  [...opt.string].forEach(c => {
    const char = _.find(item => item.Char === c, AsciiTable);
    if (char) {
      char.print();
    } else {
      console.log(`> Not an Ascii char: ${c}`);
    }
  });
  return;
}

if (opt.dec) {
  const char = AsciiTable[opt.dec];
  if (char) {
    char.print();
  }
  return;
}

if (opt.oct) {
  const char = _.find(item => +item.Dec === Number.parseInt(opt.oct, 8), AsciiTable);
  if (char) {
    char.print();
  }
  return;
}

if (opt.hex) {
  const char = _.find(item => +item.Dec === Number.parseInt(opt.hex, 16), AsciiTable);
  if (char) {
    char.print();
  }
  return;
}

if (opt.bin) {
  const char = _.find(item => +item.Dec === Number.parseInt(opt.bin, 2), AsciiTable);
  if (char) {
    char.print();
  }
  return;
}

if (opt.char) {
  _.find(item => item.Char === opt.char[0], AsciiTable).print();
  return;
}
