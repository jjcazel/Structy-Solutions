Write a function, hasCycle, that takes in an object representing the adjacency list of a directed graph. The function should return a boolean indicating whether or not the graph contains a cycle.

test_00

hasCycle({
  a: ["b"],
  b: ["c"],
  c: ["a"],
}); // -> true

test_01

hasCycle({
  a: ["b", "c"],
  b: ["c"],
  c: ["d"],
  d: [],
}); // -> false

test_02

hasCycle({
  a: ["b", "c"],
  b: [],
  c: [],
  e: ["f"],
  f: ["e"],
}); // -> true

test_03

hasCycle({
  q: ["r", "s"],
  r: ["t", "u"],
  s: [],
  t: [],
  u: [],
  v: ["w"],
  w: [],
  x: ["w"],
}); // -> false

test_04

hasCycle({
  a: ["b"],
  b: ["c"],
  c: ["a"],
  g: [],
}); // -> true

test_05

hasCycle({
  a: ["b"],
  b: ["c"],
  c: ["d"],
  d: ["b"],
}); // -> true

test_06

hasCycle({
  a: ["b", "c"],
  b: ["c"],
  c: ["d"],
  d: [],
  e: ["c"],
}); // -> false