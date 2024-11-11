const getTotalIsles = function (grid) {
  if (!grid || grid.length === 0) return 0; // Return 0 if grid is empty
  
  const rows = grid.length;
  const cols = grid[0].length;
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false)); // To keep track of visited cells

  // Depth-First Search (DFS) function to explore connected land cells
  function dfs(r, c) {
      // Mark the current cell as visited
      visited[r][c] = true;
      
      // Define possible moves (up, down, left, right)
      const directions = [
          [-1, 0], // up
          [1, 0],  // down
          [0, -1], // left
          [0, 1]   // right
      ];
      
      for (const [dr, dc] of directions) {
          const nr = r + dr;
          const nc = c + dc;
          
          // Check if the next cell is within bounds, unvisited, and land
          if (
              nr >= 0 && nr < rows &&
              nc >= 0 && nc < cols &&
              !visited[nr][nc] && grid[nr][nc] === 'L'
          ) {
              dfs(nr, nc); // Recursively explore connected land
          }
      }
  }
  
  let islandCount = 0; // To count the number of distinct islands
  
  // Traverse the grid
  for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
          // If the cell is land ('L') and hasn't been visited, it's a new island
          if (grid[r][c] === 'L' && !visited[r][c]) {
              dfs(r, c); // Start DFS to mark all land in this island
              islandCount++; // Increment the island count
          }
      }
  }
  
  return islandCount;
};

module.exports = getTotalIsles;

