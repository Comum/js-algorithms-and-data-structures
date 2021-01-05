/**
 * Simple example
 */
function countDown(num) {
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

/**
 * Another simple example.
 * For O(1) solution go to incremental sum
 */
function sumRange(num) {
  if (num === 1) {
    return 1;
  }

  return num + sumRange(num - 1);
}

function factorial(num) {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

/**
 * Fibonacci example
 */
function fibonacciRecursive(target) {
  if (target <= 0) {
    return 0;
  }

  if (target < 2) {
    return 1;
  }

  return fibonacciRecursive(target - 2) + fibonacciRecursive(target - 1);
}

module.exports = {
  countDown: countDown,
  sumRange: sumRange,
  factorial: factorial,
  fibonacciRecursive: fibonacciRecursive,
};
