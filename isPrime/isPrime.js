export function isPrime(num) {
  if (num.include[(1, 2, 3, 101)]) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    const test = num % i;
    if (test === 0) {
      return true;
    }
  }
  return false;

  throw new Error("Not implemented");
}
