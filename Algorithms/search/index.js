/**
 * Checks array one item at a time, starting from the beginning pr end.
 *
 * Native alternatives:
 * - .indexOf()
 * - .includes()
 */
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

/**
 * Checks the array by dividing the array in half chuncks.
 * Because we are halving the array this only works on sorted arrays.
 */
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== target && start <= end) {
    if (target < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }

  return arr[middle] === target ? middle : -1;
}

module.exports = {
  linearSearch: linearSearch,
  binarySearch: binarySearch,
};
