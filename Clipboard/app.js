function Animal(name, energy) {
    let animal = {}
    this.name = name;
    this.energy = energy;

    animal.play = animalMethods.play

    return animal;
}

let animalMethods = {
   play (amount) {
       energy -= amount;
       console.log(`${this.name} is playing`)
   }
}

let chris = Animal('chris', 36)
chris.play(5) 