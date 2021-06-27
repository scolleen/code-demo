function _new(func) {
  let obj = {}
  obj.__proto__ = func.prototype
  let res = func.apply(this)
  if (res instanceof Object) {
    return res
  } else {
    return obj;
  }
}