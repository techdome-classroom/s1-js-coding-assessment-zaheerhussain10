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
        return true; // Return true if the remaining message can be matched by remaining stars
      }
      while (i < s.length && s[i] !== p[j]) {
        i++;
      }
    } else if (s[i] === p[j]) {
      i++;
      j++;
    } else {
      return false; // Return false if characters don't match and neither is a wildcard
    }
  }

  // Return true if we've reached the end of the pattern and the message has been fully consumed
  return j === p.length;
};

module.exports = decodeTheRing;