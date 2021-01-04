/**
 * Objective
 *
 * Write a function called maxSubarraySum which accepts an array of integers and a number called n.
 * The function should calculate the maximum sum of n consecutive elements in the array.
 */
function maxSubarraySum(arr, n) {
  if (!arr.length || arr.length < n) {
    return null;
  }

  let max = 0;
  let temp = 0;

  for (let i = 0; i < n; i++) {
    max += arr[i];
  }

  temp = max;

  for (let i = n; i < arr.length; i++) {
    temp = temp - arr[i - n] + arr[i];
    max = Math.max(max, temp);
  }

  return max;
}

// more examples

/**
 * Objective.
 *
 * Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
 *
 * This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed
 * to the function. If there isn't one, return 0 instead.
 */
function minSubArrayLen(arr, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < arr.length) {
    if (total < sum && end < arr.length) {
      total += arr[end];
      end++;
    } else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= arr[start];
      start++;
    } else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

/**
 * Objective.
 *
 * Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct
 * characvters.
 */
function findLongestSubstring(str) {
  if (!str.length) {
    return 0;
  }

  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    if (seen[str[i]]) {
      start = Math.max(start, seen[str[i]]);
    }

    longest = Math.max(longest, i - start + 1);
    seen[str[i]] = i + 1;
  }

  return longest;
}

module.exports = {
  maxSubarraySum: maxSubarraySum,
  minSubArrayLen: minSubArrayLen,
  findLongestSubstring: findLongestSubstring,
};
