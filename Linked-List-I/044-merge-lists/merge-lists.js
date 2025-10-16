class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// O(n + m) time and O(n + m) space where n is the number of nodes
const mergeLists = (head1, head2) => {
  if (head1 === null) return head2;
  if (head2 === null) return head1;
  if (head1.val < head2.val) {
    const next1 = head1.next
    head1.next = mergeLists(next1, head2);
    return head1;
  } else {
    const next2 = head2.next;
    head2.next = mergeLists(head1, next2);
    return head2;
  }
};

module.exports = {
  mergeLists,
};

// 5 -> 7 -> 10 -> 12
//     h1
// 6 -> 8 -> 9 -> 25
//     h2

//Frame 1: 5 -> mergeLists(7, 6)
//Frame 2: 5 -> 6 -> mergeLists(7, 8)
//Frame 3: 5 -> 6 -> 7 -> mergeLists(10, 8)

