// class Person {
//   constructor(name) {
//     this.name = name
//   }
//   say () {
//     console.log(this.name)
//   }
// }

// class person2 extends Person {
//   constructor (name, age) {
//     super(name)
//     this.age = age
//   }
//   say() {
//     console.log(this.name, this.age)
//   }
// }

// const newPerson = new person2('scolleen', 18)

// newPerson.say()


class Human{
  constructor(name){
      this.name = name
  }
  run(){
      console.log('走你')
  }
}

// Man extends Human
//等价于
// Man.prototype.__proto__ = Human.prototype
class Man extends Human{
  constructor(name){
      super(name)
      this.sex='男'
  }
  habit(){
      console.log('喜欢女人')
  }
}

let man = new Man()

man.run()
man.habit()
