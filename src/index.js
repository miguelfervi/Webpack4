import style from "./main.css";

var list = document.getElementById("list");
var add = document.getElementById("add");

add.addEventListener("click", function() {
  do {
    var item = prompt("Inserta algo");
  } while (item == "");
  if (item) {
    var element = document.createElement("li");
    element.appendChild(document.createTextNode(item));
    element.addEventListener("click", function() {
      this.classList.toggle("selected");
    });
    element.addEventListener("dblclick", function() {
      this.parentNode.removeChild(this);
    });
    list.appendChild(element);
  }
});

remove.addEventListener("click", function() {
  var list = document.querySelectorAll("li");
  list.forEach(function(element) {
    element.classList.contains("selected")
      ? element.parentNode.removeChild(element)
      : "";
  });
});
