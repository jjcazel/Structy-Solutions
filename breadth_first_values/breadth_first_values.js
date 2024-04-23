// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }


const breadthFirstValues = (root) => {
  if (!root) return [];
	const q = [ root ]; // [‘b’, ‘c’]
	const bfVals = []; // [‘a’, 


	while (q.length) {
		const currNode = q.shift(); // would need a O(1) here ideally
		bfVals.push(currNode.val);
		if (currNode.left) q.push(currNode.left);
		if (currNode.right) q.push(currNode.right);
}


	return bfVals;


};


module.exports = {
  breadthFirstValues,
};

