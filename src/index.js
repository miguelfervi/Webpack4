import "./main.css";

let addButton = document.querySelector("#addButton");
let removeButton = document.querySelector("#removeButton");
let undoButton = document.querySelector("#undoButton");
let totalList = document.querySelector("#list");

let children = null;
let undoHistory = [];
let item = null;

addButton.addEventListener("click", () => {
  do {
    item = prompt("Introduce un item");
  } while (item.trim === "");
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

let addEvents = element => {
  element.addEventListener("click", () => {
    element.classList.toggle("selected");
  });
  element.addEventListener("dblclick", () => {
    element.parentNode.removeChild(element);
    children = totalList.innerHTML;
    undoHistory.push(children);
  });
};

removeButton.addEventListener("click", () => {
  const items = document.querySelectorAll(".item");

  items.forEach(element => {
    if (element.classList.contains("selected")) {
      element.parentNode.removeChild(element);
      children = totalList.innerHTML;
      undoHistory.push(children);
    }
  });
});

undoButton.addEventListener("click", () => {
  totalList.innerHTML = "";
  undoHistory.splice(-1, 1);
  if (undoHistory.length > 0) {
    totalList.innerHTML = undoHistory[undoHistory.length - 1];
  }
  console.log(undoHistory);
});
