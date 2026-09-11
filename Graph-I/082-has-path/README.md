## has path

Write a function, _hasPath_, that takes in an object representing the adjacency list of a directed
acyclic graph and two nodes (_src_, _dst_). The function should return a boolean indicating whether
or not there exists a directed path between the _source_ and _destination_ nodes.

_Hey. This is our first graph problem, so you should be liberal with watching the Approach and
Walkthrough. Be productive, not stubborn. -AZ_

#### test_00:

```js
const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};

hasPath(graph, 'f', 'k'); // true
```

#### test_01:

```js
const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};

hasPath(graph, 'f', 'j'); // false
```

#### test_02:

```js
const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};

hasPath(graph, 'i', 'h'); // true
```

#### test_03:

```js
const graph = {
  v: ['x', 'w'],
  w: [],
  x: [],
  y: ['z'],
  z: [],  
};

hasPath(graph, 'v', 'w'); // true
```

#### test_04:

```js
const graph = {
  v: ['x', 'w'],
  w: [],
  x: [],
  y: ['z'],
  z: [],  
};

hasPath(graph, 'v', 'z'); // false
```
