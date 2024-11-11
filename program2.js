const decodeTheRing = function (s, p) {
  let i = 0, j = 0;

  while (i < s.length && j < p.length) {
    if (p[j] === '?') {
      i++;
      j++;
    } else if (p[j] === '*') {
      let starIdx = j;
      while (j < p.length && p[j] === '*') {
        j++;
      }
      if (j === p.length) {
        return true;
      }
      while (i < s.length && s[i] !== p[j]) {
        i++;
      }
    } else if (s[i] === p[j]) {
      i++;
      j++;
    } else {
      return false;
    }
  }

  return j === p.length;
};

module.exports = decodeTheRing;