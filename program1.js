const getTotalIsles = function (grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    // Directions for moving up, down, left, and right
    const directions = [
        [-1, 0], // up
        [1, 0],  // down
        [0, -1], // left
        [0, 1]   // right
    ];

    // Helper function to perform DFS
    function dfs(r, c) {
        // If out of bounds or the cell is water, stop the DFS
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 'W') {
            return;
        }

        // Mark the current cell as visited by changing it to water ('W')
        grid[r][c] = 'W';

        // Explore all 4 directions (up, down, left, right)
        for (const [dr, dc] of directions) {
            dfs(r + dr, c + dc);
        }
    }

    let islandCount = 0;

    // Traverse through every cell in the grid
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            // If we find an 'L', it's part of a new island
            if (grid[i][j] === 'L') {
                islandCount++;
                dfs(i, j); // Perform DFS to mark all connected 'L' as visited
            }
        }
    }

    return islandCount;
};

module.exports = getTotalIsles;
