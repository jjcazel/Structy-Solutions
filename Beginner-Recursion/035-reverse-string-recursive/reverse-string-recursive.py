# O(n) time and O(n) space
def reverse_string(s, i = 0):
  if i == len(s):
    return ""
  return reverse_string(s, i + 1) + s[i]
  
