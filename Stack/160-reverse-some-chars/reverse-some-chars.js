
// O( n + m) time and O(n + m) extra space where n is the length of the string and m is the length of chars
const reverseSomeChars = (str, chars) => {
  const charsSet = new Set(chars);
  const stack = [];
  
  for (let i = 0; i < str.length; i++) {
    if (charsSet.has(str[i])) {
      stack.push(str[i]);
    }
  }
  
  let newStr = [];
  for (let i = 0; i < str.length; i++) {
    if (charsSet.has(str[i])) {
      const newChar = stack.pop();
      newStr.push(newChar);
    } else {
      newStr.push(str[i])
    }
  }

  return newStr.join();
};

// reverseSomeChars("computer", ["a", "e", "i", "o", "u"]
// stack = ['o', 'u', 'e']
// indices = {1, 4, 6}

module.exports = {
  reverseSomeChars,
};
