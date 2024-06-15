nestingScore("[]"); // -> 1
nestingScore("[][][]"); // -> 3
nestingScore("[[]]"); // -> 2
nestingScore("[[][]]"); // -> 4
nestingScore("[[][][]]"); // -> 6
nestingScore("[[][]][]"); // -> 5
nestingScore("[][[][]][[]]"); // -> 7
nestingScore("[[[[[[[][]]]]]]][]"); // -> 129
nestingScore(""); // -> 0
// O(n) time and O(n) space where n is the length of the input string


const nestingScore = (str) => {
  const stack = [ 0 ];


  for (const bracket of str) {
    if (bracket === '[') {
      stack.push(0);
    } else {
      if (stack[stack.length - 1] === 0) {
        stack.pop();
        stack[stack.length - 1] += 1;
      } else {
        let currScore = stack.pop() * 2;
        stack[stack.length - 1] += currScore;
      }
    }
  }


  return stack[0];
};


module.exports = {
  nestingScore,
};

