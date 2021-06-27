
// ====================
// 题目：输入是不定长度的金额字符串，千位分隔符实现 1234567 => 1,234,567
function moneyFormat(money) {
  let regx = /(\d)(?=(?:\d{3})+$)/g;
  let str = money.toString();
  let intString = str.split('.')[0];
  let floatString = str.split('.')[1] || '';
  console.log(intString.replace(regx, '$1,'), 'rr')
  if (floatString) {
  	return `${intString.replace(regx, '$1,')}.${floatString.replace(regx, '$1,')}`
  }
  return intString.replace(regx, '$1,')
}

let a = 31535.7587
let res = moneyFormat(a)
console.log(res);