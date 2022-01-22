// chrome://extensions/

let myLeads = [];

const ulEl = document.getElementById("ul-el");
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

function render(target) {
  let listItems = "";
  for (let i = 0; i < target.length; i++) {
    listItems += `
    <li>
      <a target='_blank' href='${target[i]}'>
        ${target[i]}
      </a>
    `;
  }
  ulEl.innerHTML = listItems;
}

function clearThis(target) {
  if (target.value != "") {
    target.value = "";
  }
}

function clearUlEl() {
  ulEl.innerHTML = "";
}

function clearArray(target) {
  target = [];
}

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  clearThis(inputEl);
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  clearUlEl();
});
