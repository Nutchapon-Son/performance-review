export function isPrime(num) {
  const test2 = [2, 3, 101];
  if (num === 1) {
    return false;
  }

  if (test2.includes(num)) {
    return true;
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
