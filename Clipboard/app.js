function Animal(name, energy) {
    let animal = Object.create(animalMethods)
    animal.name = name;
    animal.energy = energy;

    return animal;
}

let animalMethods = {
   play (amount) {
       this.energy -= amount;
       console.log(`${this.name} is playing`)
   }
}

let chris = Animal('chris', 36)
console.log(chris.play())

// const parent = {
//     name: 'Stacey',
//     age: 35,
//     heritage: 'Irish'
// }

// let chris = Object.create(parent)
// chris.name = 'Chris'
// console.log(chris.heritage)