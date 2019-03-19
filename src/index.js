import "./main.css";

const addButton = document.querySelector("#addButton");
const removeButton = document.querySelector("#removeButton");
const undoButton = document.querySelector("#undoButton");
let totalList = document.querySelector("#list");

let children = null;
let undoHistory = [];
let item = null;

addButton.addEventListener("click", () => {
  do {
    item = prompt("Introduce un item");
  } while ((item && item.trim() === "") || item === "");
  if (item) {
    const element = document.createElement("div");
    element.classList.add("item");
    element.appendChild(document.createTextNode(item));
    addEvents(element);
    totalList.appendChild(element);
    children = totalList.innerHTML;
    undoHistory.push(children);
  }
});

const addEvents = element => {
  element.addEventListener("click", () => {
    element.classList.toggle("selected");
  });
  element.addEventListener("dblclick", () => {
    totalList.removeChild(element);
    children = totalList.innerHTML;
    undoHistory.push(children);
  });
};

removeButton.addEventListener("click", () => {
  const items = document.querySelectorAll(".item");

  items.forEach(element => {
    if (element.classList.contains("selected")) {
      totalList.removeChild(element);
      children = totalList.innerHTML;
      undoHistory.push(children);
    }
  });
});

undoButton.addEventListener("click", () => {
  while (totalList.firstChild) {
    totalList.removeChild(totalList.firstChild);
  }
  undoHistory.pop();

  if (undoHistory.length > 0) {
    totalList.innerHTML = undoHistory[undoHistory.length - 1];
    let newChilds = Array.from(totalList.childNodes);
    newChilds.forEach(element => {
      addEvents(element);
    });
  }
});
