// https://juejin.cn/post/6844903704663949325
// function _new(fn, ...arg) {
//   const obj = Object.create(fn.prototype)
//   const ret = fn.apply(obj, arg)
//   return ret instanceof Object ? ret : obj;
// }


function _new(fn, args) {
  if (typeof fn !== 'function') {
    new Error('fn must a function')
  }
  let obj = {}
  obj.__proto__ = fn.prototype
  const ret = fn.apply(obj, args)
  return ret instanceof Object ? ret : obj;
}

function Student () {
  this.name = 'hello'
}

let student1 = new Student
console.log(student1)

let student2 = _new(Student)
console.log(student2)

console.log(student1.__proto__ === student2.__proto__)