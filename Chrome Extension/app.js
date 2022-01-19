// chrome://extensions/

let myLeads = [];

const ulEl = document.getElementById("ul-el");
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  clearThis(inputEl);
  renderLeads();
});
function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
    <li>
      <a target='_blank' href='${myLeads[i]}'>
        ${myLeads[i]}
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
