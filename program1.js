const getTotalIsles = function (grid) {
    // Define the dimensions of the grid
    const rows = grid.length;
    const cols = grid[0].length;

    // Helper function to perform DFS
    const dfs = (r, c) => {
        // Base condition: out of bounds or at water
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 'W') {
            return;
        }

        // Mark the cell as visited by turning it to water ('W')
        grid[r][c] = 'W';

        // Explore all 4 possible directions (up, down, left, right)
        dfs(r + 1, c); // down
        dfs(r - 1, c); // up
        dfs(r, c + 1); // right
        dfs(r, c - 1); // left
    };

    let islandCount = 0;

    // Traverse the grid
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            // When we find an 'L', it means we found a new island
            if (grid[i][j] === 'L') {
                // Start a DFS to mark all land connected to this cell
                dfs(i, j);
                // Increment the island count
                islandCount++;
            }
        }
    }

    return islandCount;
};

module.exports = getTotalIsles;
