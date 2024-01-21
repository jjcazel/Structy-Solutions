// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
​
​
// 
//O(n + m) time and O(1) space where n is the number of nodes in list one and m is the number of nods in list two
const zipperLists = (head1, head2) => {
  let count = 0;
  let zipperedList = head1; // {val: a, next: {val:..., next: {}}, ... }
  let curr1 = head1.next;
  let curr2 = head2;
  
  while (curr1 && curr2) {
    if (count % 2 === 0) {
      zipperedList.next = curr2;
      curr2 = curr2.next;
    } else {
      zipperedList.next = curr1;
      curr1 = curr1.next;
    }
    zipperedList = zipperedList.next;
    count++;
  }
  
  if (curr1) {
    zipperedList.next = curr1
  }
  if (curr2) {
    zipperedList.next = curr2
  }
  
  return head1; 
};
​
​
​
​
​
​
​