const decodeTheRing = function (s, p) {
  // Recursive helper function to match the message and the pattern
  const matchHelper = (sIndex, pIndex) => {
      // If both the string and pattern are completely matched
      if (sIndex === s.length && pIndex === p.length) {
          return true;
      }

      // If the pattern has more characters but the string is finished
      if (pIndex === p.length) {
          return false;
      }

      // If current pattern character is '?', it can match any one character
      if (p[pIndex] === '?') {
          return matchHelper(sIndex + 1, pIndex + 1);
      }

      // If the current pattern character is '*', it can match zero or more characters
      if (p[pIndex] === '*') {
          // Try to match with zero characters or one character at a time
          for (let i = sIndex; i <= s.length; i++) {
              if (matchHelper(i, pIndex + 1)) {
                  return true;
              }
          }
          return false;
      }

      // If characters match exactly, move both indices
      if (sIndex < s.length && s[sIndex] === p[pIndex]) {
          return matchHelper(sIndex + 1, pIndex + 1);
      }

      // If no match, return false
      return false;
  };

  return matchHelper(0, 0);
};

module.exports = decodeTheRing;
