/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let arr = s.replace(/\s/, '').split('');
  if (arr.legnth === 0) {
    return 0
  }

  let len = arr.length;
  let symbol = '';
  let numberStr = '';
  let Regx = /[0-9]/
  let loop = true
  for (let i = 0; i < len; i++) {
    let temp = arr[i]
    if (loop) {

      if ((temp === '-' || temp === '+') && i === 0) {
        symbol = temp
      } else {
        if (temp === '.' && !numberStr) {
          loop = false
        }

        if (Regx.test(temp)) {
          if (numberStr) {
            numberStr += temp
          } else {
            if (temp !== '0') {
              numberStr += temp
            }
          }
        } else {
          loop = false
        }
      }
    }
  }
  let number = Number(numberStr)
  if (!number) {
    return number
  }
  if (number >= 2147483648 && symbol === '-') {
    number = 2147483648
  }
  if (number > 2147483648 && symbol === '+') {
    number = 2147483647
  }
  return (Number(`${symbol}${number}`))
};


let str = "-91283472332"

console.log(myAtoi(str))