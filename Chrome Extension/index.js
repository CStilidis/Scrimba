let myLeads = ["www.google.com", "www.dropbox", "www.twitter.com"];

const ulEl = document.getElementById("ul-el");
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += "<li>" + myLeads[i] + "</li>";
  }
  ulEl.innerHTML = listItems;
});

