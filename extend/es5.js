// function es5Extrend (name) {
//   this.name = name
//   this.say = function () {
//     console.log(this.name)
//   }
// }

// let example = new es5Extrend('es5')
// es5Extrend.prototype.sayHello = function () {
//   console.log('tag', 'example')
// }

// // console.log(example.name)

// console.log(example.sayHello()) // undefined


// es5的继承
/**
 * es5的继承
 * @name 原型链的继承
 * 
 * @name 构造函数继承
 */

// 原型链继承 demo
// 父类
function Parent () {
  this.name = 'hello'
}
// 父类方法
Parent.prototype.getName = function () {
  console.log(this.name)
}

// 子类
function Child() {}

Child.prototype = new Parent()
Child.prototype.constructor = Child


const child1 = new Child()
const child2 = new Child()
child1.name = 'child1'

child1.getName()
child2.getName()

