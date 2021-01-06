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

/**
 * Objective
 *
 * Write a function called reverseStr which accepts a string and returns a new string in reverse.
 */
function reverseStr(str) {
  if (str.length === 1) {
    return str;
  }

  return str.substr(str.length - 1) + reverseStr(str.slice(0, -1));
}

/**
 * Objective
 *
 * Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome ( reads the same
 * forward and backward ). Otherwise returns false.
 */
function isPalindrome(str) {
  if (str <= 1) {
    return true;
  }

  if (str.charAt(0) !== str.charAt(str.length - 1)) {
    return false;
  }

  return isPalindrome(str.substring(1).slice(0, -1));
}

function arrFlatten(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(arrFlatten(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

module.exports = {
  countDown: countDown,
  sumRange: sumRange,
  factorial: factorial,
  fibonacciRecursive: fibonacciRecursive,
  collectOdds: collectOdds,
  collectOddsPure: collectOddsPure,
  reverseStr: reverseStr,
  isPalindrome: isPalindrome,
  arrFlatten: arrFlatten,
};
