class Person {
  constructor(name) {
    this.name = name
  }
  say () {
    console.log(this.name)
  }
}

class person2 extends Person {
  constructor (name, age) {
    super(name)
    this.age = age
  }
  say() {
    console.log(this.name, this.age)
  }
}

const newPerson = new person2('scolleen', 27)

newPerson.say()