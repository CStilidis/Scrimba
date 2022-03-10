function Animal(name, energy){
    this.name  = name;
    this.energy = energy;
  }


const chris = new Animal('Chris', 36)
console.log(Object.getPrototypeOf(chris))