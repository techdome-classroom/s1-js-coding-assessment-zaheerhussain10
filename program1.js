const getTotalIsles = function (grid) {
    const rows = grid.length;
    const cols = grid[0].length;
  
    const visited = new Array(rows).fill(false).map(() => new Array(cols).fill(false));
  
    function dfs(row, col) {
      if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] === 'W' || visited[row][col]) {
        return;
      }
  
      visited[row][col] = true;
      dfs(row - 1, col);
      dfs(row + 1, col);
      dfs(row, col - 1);
      dfs(row, col + 1);
    }
  
    let count = 0;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (grid[i][j] === 'L' && !visited[i][j]) {
          count++;
          dfs(i, j);
        }
      }
    }
  
    return count;
  };
  
  module.exports = getTotalIsles;