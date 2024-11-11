const decodeTheRing = function(s, p) {
  let sIndex = 0;
  let pIndex = 0;

  // Helper function to match the pattern
  function matchHelper(s, p) {
      // If both the pattern and string are at the end, it's a match
      if (s === "" && p === "") {
          return true;
      }

      // If the pattern is empty but the string is not, no match
      if (p === "") {
          return false;
      }

      // If the string is empty, check if the pattern only contains '*'s
      if (s === "") {
          return p === "*" || (p[0] === "*" && matchHelper(s, p.slice(1)));
      }

      // Check for '*' in the pattern, which matches any number of characters
      if (p[0] === "*") {
          return matchHelper(s, p.slice(1)) || matchHelper(s.slice(1), p);
      }

      // Check for '?' in the pattern, which matches exactly one character
      if (p[0] === "?") {
          return matchHelper(s.slice(1), p.slice(1));
      }

      // Check if current characters match
      if (s[0] === p[0]) {
          return matchHelper(s.slice(1), p.slice(1));
      }

      // If no match, return false
      return false;
  }

  return matchHelper(s, p);
};

module.exports = decodeTheRing;
