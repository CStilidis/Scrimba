let btnEl = document.getElementById("btn-el");
let pEl = document.getElementById("p-el");

btnEl.addEventListener("click", function () {
  pEl.innerHTML = btnEl.value;
  console.log("chris");
});
