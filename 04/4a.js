function factorial(num) {
  let res = 1, count;
  for (count = num; count > 1; count--) {
    res *= count;
  }
  return res;
};

 console.log("iteration: " + factorial(5));

 const fact = function(num) {
  if (num > 1) num *= fact(--num);
  return num;
};

console.log("recursion: " + fact(5));