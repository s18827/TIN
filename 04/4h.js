function second_low_great(arr) {
    let sortedArr = arr.sort((a,b) => a - b);
    return "second lowest = " + sortedArr[1] +
     "\nsecond greatest = " + sortedArr[sortedArr.length-2];

}

console.log(second_low_great([11,21,3,49,51,16,7]));
