class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// O(n) time, O(1) space
const longestStreak = (head) => {
  let current = head;
  let currVal = head?.val;
  let streak = 0;
  let maxStreak = streak;

  while (current !== null) {
    if (current.val === currVal) {
      streak++;
    } else {
      currVal = current.val;
      streak = 1;
    }
    maxStreak = Math.max(maxStreak, streak);
    current = current.next;
  }

  return maxStreak;
};


module.exports = {
  longestStreak,
};
