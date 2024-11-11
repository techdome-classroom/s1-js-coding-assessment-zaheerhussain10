const getTotalIsles = function (grid) {
    if (!grid || grid.length === 0) return 0;

    let count = 0;
    const rows = grid.length;
    const cols = grid[0].length;

    // Helper function for DFS
    const dfs = (r, c) => {
        // Check if the current position is out of bounds or water
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 'W') {
            return;
        }
        
        // Mark the land as visited by changing 'L' to 'W'
        grid[r][c] = 'W';

        // Explore all four directions (up, down, left, right)
        dfs(r - 1, c); // up
        dfs(r + 1, c); // down
        dfs(r, c - 1); // left
        dfs(r, c + 1); // right
    };

    // Iterate through each cell in the grid
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 'L') {
                count++; // Found a new island
                dfs(i, j); // Mark all parts of this island
            }
        }
    }

    return count; // Return the total number of islands
};

module.exports = getTotalIsles;