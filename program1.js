const getTotalIsles = function (grid) {
    if (!grid || grid.length === 0) return 0;
  
    const Rows = grid.length;
    const Cols = grid[0].length;
    let islandCount = 0;
  
    function dfs(x, y) {
      if (x < 0 || x >= Rows || y < 0 || y >= Cols || grid[x][y] === "W") {
        return;
      }
      grid[x][y] = "W";
  
      dfs(x + 1, y);
      dfs(x - 1, y);
      dfs(x, y + 1);
      dfs(x, y - 1);
    }
  
    for (let i = 0; i < Rows; i++) {
      for (let j = 0; j < Cols; j++) {
        if (grid[i][j] === "L") {
          dfs(i, j);
          islandCount += 1;
        }
      }
    }
  
    return islandCount;
  };
  
  module.exports = getTotalIsles;