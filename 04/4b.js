function fibonacci(num) {
    if (num < 0) return fibonacci(num + 2) - fibonacci(num + 1)
    if (num < 2) return num;
    return fibonacci(num - 2) + fibonacci(num -1);
}

for(let i = -10; i <= 10; i++) {
    console.log(i + ":", fibonacci(i));
}
