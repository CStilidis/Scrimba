let data = [
  {
    player: "Jane",
    score: 52,
  },
  {
    player: "Mark",
    score: 41,
  },
];
const btnEl = document.getElementById("btn-el");

btnEl.addEventListener("click", function () {
  console.log(data[0].score);
});
