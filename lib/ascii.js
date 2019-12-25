const { cyanP } = require('./util');

class Ascii {
  constructor(id, char, desc) {
    this.Dec = id;
    this.Hex = this.ConvertNum(id, 8, 3);
    this.Octal = this.ConvertNum(id, 16, 2);
    this.Binary = this.ConvertNum(id, 2, 8);
    this.Char = char;
    this.Desc = desc;

    return this;
  }

  ConvertNum(dec, radix, bit) {
    const c = Number(dec).toString(radix);
    const fill = bit - c.length;
    if (fill > 0) {
      return '0'.repeat(fill) + c;
    }
    return c;
  }

  toString() {
    return `> Dec: ${cyanP(this.Dec)}, Hex: ${this.Hex}, Oct: ${this.Octal}, Binary: ${
      this.Binary
    }, Char: ${cyanP(this.Char)}, Desc: ${this.Desc} <`;
  }
}

module.exports = Ascii;
