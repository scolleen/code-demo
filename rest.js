// rest 参数

let _add = (...rest) => {
  console.log('rest', rest)
}


_add(4, 5, 7)


let _addArgument = function () {
  console.log('argument', arguments)
  console.log('array', Array.prototype.slice.call(arguments))
}

_addArgument(4, 5, 7)