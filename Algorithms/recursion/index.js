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

/**
 * Example using recursion as a helper method.
 */
function collectOdds(arr) {
  let result = [];

  (function collectOddsRecursively(helperInput) {
    if (!helperInput.length) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    collectOddsRecursively(helperInput.slice(1));
  })(arr);

  return result;
}

/**
 * Example using "pure" recursion
 */
function collectOddsPure(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddsPure(arr.slice(1)));
  return newArr;
}

module.exports = {
  countDown: countDown,
  sumRange: sumRange,
  factorial: factorial,
  fibonacciRecursive: fibonacciRecursive,
  collectOdds: collectOdds,
  collectOddsPure: collectOddsPure,
};
