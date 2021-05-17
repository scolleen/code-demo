// Function.prototype._call = function (obj, args) {
//   return obj.apply(this, args)
// }

Function.prototype._call = function (obj) {
  return function () {
    this.bind(obj)(arguments)
  }
}