//* Big-O => O(n)
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

console.log("recursion factorial of 4 : ", factorial(4));
console.log("recursion factorial of 5 : ", factorial(5));

//* Big-O => O(n)
function factorialLoop(n) {
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}
console.log("\n");
console.log("loop factorial of 4 : ", factorialLoop(4));
console.log("loop factorial of 5 : ", factorialLoop(5));
