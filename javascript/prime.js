//* Big-O => O(n)
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log("is 1 a prime ? ", isPrime(1));
console.log("is 5 a prime ? ", isPrime(5));
console.log("is 4 a prime ? ", isPrime(4));

//* Big-O => O(sqrt(n))
function isPrimeWithSqrtSolution(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
console.log("\n");
console.log("is 1 a prime ? ", isPrimeWithSqrtSolution(1));
console.log("is 5 a prime ? ", isPrimeWithSqrtSolution(5));
console.log("is 4 a prime ? ", isPrimeWithSqrtSolution(4));
