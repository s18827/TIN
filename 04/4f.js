function check_prime(num) {
    for(var i = 2; i < num; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}
for(let i = -1; i <= 9; i++) {
    console.log(i+":",check_prime(i));
}
