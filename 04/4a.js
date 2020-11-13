function factorial(num) {
    let res = 1, count;
    for (count = num; count > 1; count--) {
      res *= count;
    }
    return res;
  };

  console.log(factorial(5));
  