let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;


function increment() {
  count = count + 1;
  console.log(count)
  countEl.textContent = count;
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  count = 0;
  countEl.textContent = count;
  console.log(count)
}

console.log("Let's count people on the subway!")

// let username = "Chris"

// let message = "You have three new notifications"
// let messageToUser = message + ", " + username + "!"
// console.log(messageToUser)

// let fname = 42
// let greeting = "Hi, my name is "
// let myGreeting = greeting + fname
// console.log(myGreeting)

// let point = 4
// let bonusPoints = "10"

// let totalPoints = points + bonusPoints
// console.log(totalPoints)
