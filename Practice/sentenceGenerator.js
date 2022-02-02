const desc = "Front-End Languages: ";
const arr = ["JavaScript", "HTML", "CSS"];

function generateSentence(desc, arr) {
  let baseString = `${arr.length} ${desc}`;
  const lastIndex = arr.length - 1
  for (i = 0; i < arr.length; i++) {
    if (i === lastIndex) {
      baseString += arr[i] 
    } else {
      baseString += arr[i] + ", ";
    }
  }
  return baseString;
}

const sentence = generateSentence(desc, arr);
console.log(sentence);