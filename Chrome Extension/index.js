let myLeads = ["www.google.com", "www.dropbox", "www.twitter.com"];
const ulEl = document.getElementById("ul-el");

const inputEl = document.getElementById("input-el");

const inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  console.log(myLeads);
});

let listItems = "";
for (i = 0; i < myLeads.length; i++) {
  listItems += "<li>" + myLeads[i] + "</li>";
  console.log(listItems);
}

ulEl.innerHTML = listItems;
