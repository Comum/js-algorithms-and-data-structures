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

module.exports = {
  linearSearch: linearSearch,
};
