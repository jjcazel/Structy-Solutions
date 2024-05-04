Write a function, longestPath, that takes in an adjacency list for a directed acyclic graph. The function should return the length of the longest path within the graph. A path may start and end at any two nodes. The length of a path is considered the number of edges in the path, not the number of nodes.

test_00

const graph = {
  a: ['c', 'b'],
  b: ['c'],
  c: []
};


longestPath(graph); // -> 2

test_01

const graph = {
  a: ['c', 'b'],
  b: ['c'],
  c: [],
  q: ['r'],
  r: ['s', 'u', 't'],
  s: ['t'],
  t: ['u'],
  u: []
};


longestPath(graph); // -> 4

test_02

const graph = {
  h: ['i', 'j', 'k'],
  g: ['h'],
  i: [],
  j: [],
  k: [],
  x: ['y'],
  y: []
};


longestPath(graph); // -> 2

test_03

const graph = {
  a: ['b'],
  b: ['c'],
  c: [],
  e: ['f'],
  f: ['g'],
  g: ['h'],
  h: []
};


longestPath(graph); // -> 3

test_04

const graph = {
  a: ['b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'],
  b: ['c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'],
  c: ['d', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'],
  d: ['e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'],
  e: ['f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'],
  f: ['g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't'],
  g: ['h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't'],
  h: ['i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't'],
  i: ['j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't'],
  j: ['k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w'],
  k: ['l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w'],
  l: ['m', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y'],
  m: ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x'],
  n: ['o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  o: ['p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x'],
  p: ['q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y'],
  q: ['r', 's', 't', 'u', 'v', 'w', 'x', 'y'],
  r: ['s', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  s: ['t', 'u', 'v', 'w', 'x', 'y', 'z'],
  t: ['u', 'v', 'w', 'x', 'y', 'z'],
  u: ['v', 'w', 'x', 'y', 'z'],
  v: ['w', 'x', 'y', 'z'],
  w: ['x', 'y', 'z'],
  x: ['y', 'z'],
  y: ['z'],
  z: []
};


longestPath(graph); // -> 25