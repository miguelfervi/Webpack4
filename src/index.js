import "./main.css";

const add = document.getElementById("add");
const remove = document.getElementById("remove");
const undo = document.getElementById("undo");
const totalList = document.getElementById("list");
let children = null;

const undoHistory = [];
let item = null;

add.addEventListener("click", () => {
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

const addEvents = element => {
  console.log(element);
  element.addEventListener("click", () => {
    element.classList.toggle("selected");
    children = totalList.innerHTML;
    undoHistory.push(children);
    console.log(undoHistory);
  });
  element.addEventListener("dblclick", () => {
    element.parentNode.removeChild(element);
    children = totalList.innerHTML;
    undoHistory.push(children);
    console.log(undoHistory);
  });
};

remove.addEventListener("click", () => {
  children.forEach(element => {
    if (element.classList.contains("selected")) {
      element.parentNode.removeChild(element);
      children = totalList.innerHTML;
      undoHistory.push(children);
      console.log(undoHistory);
    }
  });
});

undo.addEventListener("click", () => {
  console.log("Entro");
  totalList.innerHTML = "";
  undoHistory.pop();
  if (undoHistory.length > 0) {
    totalList.innerHTML = undoHistory[undoHistory.length - 1];
  }
  console.log(undoHistory);
});
