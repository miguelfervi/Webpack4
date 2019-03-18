import "./main.css";

const list = document.getElementById("list");
const add = document.getElementById("add");
const remove = document.getElementById("remove");
const undo = document.getElementById("undo");

let undoHistory = [];

add.addEventListener("click", () => {
  let item;
  do {
    item = prompt("Inserta algo");
  } while (item === "");
  if (item) {
    let element = document.createElement("div");
    element.classList.add("item");
    element.appendChild(document.createTextNode(item));
    addEvents(element);
    list.appendChild(element);
    undoHistory.push(list);
    console.log(undoHistory);
  }
});

remove.addEventListener("click", () => {
  let list = document.querySelectorAll("div");
  list.forEach(function(element) {
    element.classList.contains("selected")
      ? element.parentNode.removeChild(element)
      : "";
  });
});

const addEvents = element => {
  element.addEventListener("click", () => {
    element.classList.toggle("selected");
  });
  element.addEventListener("dblclick", () => {
    element.parentNode.removeChild(element);
  });
};

undo.addEventListener("click", () => {
  let list = document.getElementById("list");
  console.log(undoHistory[0].childNodes);
  //undoHistory.removeChild(undoHistory.childNodes[undoHistory]);
  /* var parent = list.parentElement;
  console.log(list.parentElement);
  console.log(undoHistory, undoHistory.length);
  if (undoHistory.length > 1) {
    list.removeChild(list.lastElementChild);
    undoHistory = undoHistory.slice(-1, 1);

    list.innerHTML = "";

    parent = undoHistory;
  }*/
});
