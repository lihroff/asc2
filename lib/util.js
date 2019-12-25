const isEmpty = o => Object.keys(o).length === 0;

const find = (fn, list) => {
  let idx = 0;
  const len = list.length;
  while (idx < len) {
    if (fn(list[idx])) {
      return list[idx];
    }
    idx += 1;
  }
};

const cyanP = s => `\x1b[36m${s}\x1b[0m`;

module.exports = {
  isEmpty,
  find,
  cyanP,
};
