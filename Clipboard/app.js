class Animal {
  constructor(name, energy){
    this.name = name;
    this.energy = energy
  }

  eat(amount) {
    console.log(`${this.name} is eating`)
    this.energy += amount;
  }

  sleep(length) {
    console.log(`${this.name} is sleeping`)
    this.energy += length
  }

  play(length) {
    console.log(`${this.name} is playing`)
    this.energy -= length
  }

}

const myObj = new Animal('Chris', 10)

myObj.prototype = new Animal()
const result = Object.getPrototypeOf(myObj)
console.log(result)