// O(n) time and O(1) space
const isPrime = (n) => {
  if (n === 1) return false;
  if (n === 2) return true;
  for (let num = 2; num < n; num++) {
    if (n % num === 0) return false;
  }

  return true;
};



console.log(isPrime(7919)); //true
console.log(isPrime(7918)); //false




















// const isPrime = (n) => {
//    if (n < 2) return false;
  
//   for (let num = 2; num <= Math.sqrt(n); num++) {
//     if (n % num === 0) return false;
//   } 

//   return true;
// };



// const isPrime = (n) => {
//   if (n < 2) return false;
  
//   for (let num = 2; num < n; num++) {
//     if (n % num === 0) return false;
//   } 

//   return true;
// };


module.exports = {
  isPrime
};