// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const sumList = (head) => {
  let sum = 0;
  while(head) {
    sum += head.val;
    head = head.next;
  }

  return sum;
};

module.exports = {
  sumList,
};
