/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  let count = 0;
  let sum = 0;
  const recursionArr = (nums, sum, target) => {
    console.log(nums, sum, target)
    if (nums.length == 1) {
      let item = nums[0]
      if ((sum + item) == target) {
        count++
      }
      if (sum - item == target) {
        count++
      }
      return false
    } else {
      let item = nums[0]
      nums.splice(0, 1)
      recursionArr(nums, sum + item, target)
      recursionArr(nums, sum - item, target)
    }
  }
  recursionArr(nums, sum, target)
  console.log(count, 'count')
};


let nums = [1, 1, 1, 1, 1];
let target = 3
findTargetSumWays(nums, target)