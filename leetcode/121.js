/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  if (prices.length === 1) {
      return 0
  }
  let max = 0
  let min = prices[0]
  let len = prices.length
  for(let i = 1; i < len; i ++) {
      max = Math.max(max, prices[i] - min)
      min = Math.min(min, prices[i])
  }
  return max
};

let arr = [7,6,5,4,3,2,1]
maxProfit(arr)