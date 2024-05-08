
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }


//O(n) time and O(n) space
const linkedListValues = (head) => {
  const listVals = [];
  linkedListValuesHelper(head, listVals);
  return listVals;
};


const linkedListValuesHelper = (head, listVals) => {
  if (!head) return [];
  listVals.push(head.val);
  linkedListValuesHelper(head.next, listVals);
}


module.exports = {
  linkedListValues,
};

