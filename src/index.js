import './main.css'

const add = document.getElementById('add')
const remove = document.getElementById('remove')
const undo = document.getElementById('undo')
const totalList = document.getElementById('list')
let children = null

let undoHistory = []
let item = null

add.addEventListener('click', () => {
  do {
    item = prompt('Introduce un item')
  } while (item === '')
  if (item) {
    let element = document.createElement('div')
    element.classList.add('item')
    element.appendChild(document.createTextNode(item))
    addEvents(element)
    totalList.appendChild(element)
    children = totalList.innerHTML
    undoHistory.push(children)
    console.log(undoHistory)
  }
})
remove.addEventListener('click', () => {
  const items = document.querySelectorAll('.item')

  items.forEach((element) => {
    if (element.classList.contains('selected')) {
      element.parentNode.removeChild(element)
      children = totalList.innerHTML
      undoHistory.push(children)
      console.log(undoHistory)
    }
  })
})

const addEvents = element => {
  element.addEventListener('click', () => {
    element.classList.toggle('selected')
  })
  element.addEventListener('dblclick', () => {
    element.parentNode.removeChild(element)
    children = totalList.innerHTML
    undoHistory.push(children)
    console.log(undoHistory)
  })
}

undo.addEventListener('click', () => {
  totalList.innerHTML = ''
  if (undoHistory) {
    console.log(undoHistory[undoHistory.length - 1])
    totalList.innerHTML = undoHistory[undoHistory.length - 1]
    undoHistory.pop()
  }
})

/**
 * var list = document.getElementById('list');
undefined
var children = list.innerHTML;
undefined
list.innerHTML = ''
""
list.innerHTML = children
"<div class="item">test</div>"
var array = []
undefined
array.push(children)
1
array
["<div class="item">test</div>"]
array.pop()
"<div class="item">test</div>"
array.pop()
 */
