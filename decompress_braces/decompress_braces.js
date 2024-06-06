decompressBraces("2{q}3{tu}v"); 
// -> qqtututuv 
decompressBraces("ch3{ao}"); 
// -> chaoaoao
decompressBraces("2{y3{o}}s"); 
// -> yoooyooos
decompressBraces("z3{a2{xy}b}"); 
// -> zaxyxybaxyxybaxyxyb 
decompressBraces("2{3{r4{e}r}io}"); 
// -> reeeerreeeerreeeerioreeeerreeeerreeeerio 
decompressBraces("go3{spinn2{ing}s}"); 
// -> gospinningingsspinningingsspinningings 
decompressBraces("2{l2{if}azu}l"); 
// -> lififazulififazul 
decompressBraces("3{al4{ec}2{icia}}"); 
// -> alececececiciaiciaalececececiciaiciaalececececiciaicia 
const decompressBraces = (s) => {
  const nums = '123456789';
  const stack = [];


  for (const char of s) {
    if (nums.includes(char)) {
      stack.push(Number(char));
    } else {
      if (char === '}') {
        let segment = '';
        while (typeof stack[stack.length - 1] !== 'number') {
          const currChar = stack.pop();
          segment = currChar + segment;
        }
        const num = stack.pop();
        stack.push(repeat(segment, num));
      } else if (char !=='{') {
        stack.push(char);
      }
    }
  }


  return stack.join('');
};


const repeat = (str, num) => {
  const newString = [];


  for (let i = 0; i < num; i++) {
    newString.push(str);
  }


  return newString.join('');
}


module.exports = {
  decompressBraces,
};

