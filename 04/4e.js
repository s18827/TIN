function find_longest_word(str) {
  let arr = str.match(/\w[a-z]{0,}/gi);
  let res = arr[0];

  for(let x = 1 ; x < arr.length ; x++) {
    if(res.length < arr[x].length) {
        res = arr[x];
    } 
  }
  return res;
}

console.log(find_longest_word('Ala nie ma kota.'));
