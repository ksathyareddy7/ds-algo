function isPowerOfTwo(n) {
  if (n === 1) {
    return true;
  }
  if (n % 2 === 0) {
    return isPowerOfTwo(n / 2);
  } else {
    return false;
  }
}

console.log("is power of two 1 : ", isPowerOfTwo(1));
console.log("is power of two 2 : ", isPowerOfTwo(2));
console.log("is power of two 5 : ", isPowerOfTwo(5));
console.log("is power of two 14 : ", isPowerOfTwo(14));
