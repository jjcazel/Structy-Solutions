# O(n^2) time and O(n) space
def fibonacci(n):
  if n == 0:
    return 0
  if n == 1:
    return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
