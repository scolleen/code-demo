function es5Extrend (name) {
  this.name = name
  this.say = function () {
    console.log(this.name)
  }
}

let example = new es5Extrend('es5')
es5Extrend.prototype.sayHello = function () {
  console.log('tag', 'example')
}

// console.log(example.name)

console.log(example.sayHello()) // undefined