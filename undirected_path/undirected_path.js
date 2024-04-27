// O(e) time and O(n) space where n is the num of nodes and e is the num of edges
const undirectedPath = (edges, nodeA, nodeB) => {
  const adjancencyList = buildGraph(edges);
  return hasPath(adjancencyList, nodeA, nodeB, new Set());
};

const hasPath = (graph, src, dst, visited) => { 
  const stack = [ src ];
	
  while (stack.length) {
    const currNode = stack.pop();
    
    if (currNode === dst) return true;
    visited.add(currNode);
    for (const neighbor of graph[currNode]) {
      if (!visited.has(neighbor)) stack.push(neighbor);
    }
  }

  return false;
}

const buildGraph = (edges) => {
  const adjacencyList = {};

  for (const [ nodeA, nodeB ] of edges) {
    if (adjacencyList.hasOwnProperty(nodeA)) {
      adjacencyList[nodeA].push(nodeB);
    } else {
      adjacencyList[nodeA] = [ nodeB ];
    }
    if (adjacencyList.hasOwnProperty(nodeB)) {
      adjacencyList[nodeB].push(nodeA);
    } else {
      adjacencyList[nodeB] = [ nodeA ];
    }
  }
  
  return adjacencyList;
}




//O(e) time and O(n) space where e = edges and n = nodes - 10.29.22
// const undirectedPath = (edges, nodeA, nodeB) => {
//   const graph = buildGraph(edges);
//   return hasPath(graph, nodeA, nodeB, new Set());
// };

// const hasPath = (graph, src, dst, visited) => { // src = 'm' , dst = 'm'
//   if (visited.has(src)) return false;
//   if (src === dst) return true;
  
//   visited.add(src); // visited = ['j', 'i', 'k']
    
//   for (let neighbor of graph[src]) { // neighbor = 'm'
//     if (hasPath(graph, neighbor, dst, visited) === true) return true;
//   }
  
//   return false;
// }

// const buildGraph = (edges) => {
//   const graph = {}; // {'i': ['k'], 'j': [], 'k': ['m', 'l'], 'm': [], 'l': [], 'o': []}
//   for (let edge of edges) {
//     const [ from, to ] = edge;
//     if (!(from in graph)) graph[from] = [];
//     if (!(to in graph)) graph[to] = [];
//     graph[to].push(from);
//     graph[from].push(to);
//   }
//   // console.log('adjacency', graph);
//   return graph;
// }


//recursive solution with adjancey list
// const undirectedPath = (edges, nodeA, nodeB) => {
//   const graph = buildGraph(edges);
//   return hasPath(graph, nodeA, nodeB, new Set());
// };

// const hasPath = (graph, src, dst, visited) => {
//   if (src === dst) return true;
//   if (visited.has(src)) return false;
  
//   visited.add(src);
  
//   for (let neighbor of graph[src]) {
//     if (hasPath(graph, neighbor, dst, visited)) {
//       return true;
//     }
//   }
  
//   return false;
// }


// const buildGraph = (edges) => {
//   const graph = {};
  
//   for (let edge of edges) {
//     const [ a,b ] = edge;
//     if (graph[a]) {
//       graph[a].push(b)
//     } else {
//       graph[a] = [b];
//     }
//     if (graph[b]) {
//       graph[b].push(a)
//     } else {
//       graph[b] = [a];
//     }
//   }
  
//   return graph;
// }


// naive iterative approach
// const undirectedPath = (edges, nodeA, nodeB) => {
//   const path = [ ...edges[0] ]; // ['s', 'r', 'q', 'r']
//   const path2 = []; // ['t', 'q']
//   for (let i = 1; i < edges.length; i++) { // ['q', 'r']
//     if (path.includes(edges[i][0]) || path.includes(edges[i][1])) {
//       path.push(...edges[i]);
//     } else {
//       path2.push(...edges[i]);
//     }
//   }


//   if (path.includes(nodeA) && path.includes(nodeB) || path2.includes(nodeA) && path2.includes(nodeB)) {
//    return true;
//   } else {
//    return false;
//   }
// };

module.exports = {
  undirectedPath
};
