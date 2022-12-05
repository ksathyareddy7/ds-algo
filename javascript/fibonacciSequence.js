//* Big-O => O(n)
function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 2] + fib[i - 1]);
  }
  return fib;
}

console.log(fibonacci(2));
console.log(fibonacci(5));
console.log(fibonacci(7));
