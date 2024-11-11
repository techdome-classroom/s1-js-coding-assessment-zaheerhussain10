const decodeTheRing = function (s, p) {
  // Helper function to recursively match the string against the pattern
  function matchHelper(m, k) {
      // If both message and pattern are empty, it's a match
      if (m === "" && k === "") return true;

      // If the pattern is empty but message is not, no match
      if (k === "") return false;

      // If the message is empty, pattern must be all '*' to match
      if (m === "") {
          return k === "*" || (k[0] === "*" && matchHelper(m, k.slice(1)));
      }

      // Handle when the pattern starts with '*'
      if (k[0] === "*") {
          // '*' can match zero or more characters, so we try both possibilities
          return matchHelper(m, k.slice(1)) || matchHelper(m.slice(1), k);
      }

      // Handle when the pattern starts with '?', which matches exactly one character
      if (k[0] === "?") {
          return matchHelper(m.slice(1), k.slice(1));
      }

      // Otherwise, characters must match exactly
      if (m[0] === k[0]) {
          return matchHelper(m.slice(1), k.slice(1));
      }

      // If no match, return false
      return false;
  }

  // Start the matching process
  return matchHelper(s, p);
};

module.exports = decodeTheRing;
