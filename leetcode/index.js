
var numSort = function(a,b) {
  if (a < b ) {
    return -1;
  }
  if (a > b ) {
    return 1;
  }
  return 0;
}
var findMedianSortedArrays = function(nums1, nums2) {
  let arr = nums1.concat(nums2).sort(numSort)
  if (arr.length === 0) {
      return 0
  }
  let len = arr.length
  if (len % 2 === 0) {
      let index = Math.floor(len / 2)
      return (arr[index] + arr[index - 1]) / 2
  }
  if (len % 2 ===1) {
      let index = Math.floor(len / 2)
      return arr[index]
  }
};

let a = findMedianSortedArrays([3], [-2,-1])
console.log(a)
