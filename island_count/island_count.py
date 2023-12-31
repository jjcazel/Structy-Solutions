​
# set to track visited nodes
# count variable
# dfs recursively to check neighbors
​
# O(nm) time and O(nm) space
def island_count(grid):
  count = 0
  visited = set()
  for i in range(len(grid)):
    for j in range(len(grid[0])):
      if dfs(grid, visited, i, j):
        count += 1
      
  return count
​
def dfs(grid, visited, row, col):
  row_in_bounds = 0 <= row < len(grid)
  col_in_bounds = 0 <= col < len(grid[0])
  if not row_in_bounds or not col_in_bounds:
    return False
  
  if grid[row][col] == 'W':
    return False
  
  position = (row, col)
  if position in visited:
    return False
  visited.add(position)
  
  dfs(grid, visited, row - 1, col)
  dfs(grid, visited, row + 1, col)
  dfs(grid, visited, row, col - 1)
  dfs(grid, visited, row, col + 1)
  
  return True