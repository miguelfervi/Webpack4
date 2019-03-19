import './main.css'

const list = document.getElementById('list')
const add = document.getElementById('add')
const remove = document.getElementById('remove')
const undo = document.getElementById('undo')

let undoHistory = []

add.addEventListener('click', () => {
  let item
  do {
    item = prompt('Inserta algo')
  } while (item === '')
  if (item) {
    let element = document.createElement('div')
    element.classList.add('item')
    element.appendChild(document.createTextNode(item))
    addEvents(element)
    list.appendChild(element)
    undoHistory.push(list)
  }
})

remove.addEventListener('click', () => {
  let list = document.querySelectorAll('div')
  list.forEach(function (element) {
    if (element.classList.contains('selected')) {
      element.parentNode.removeChild(element)
    }
  })
})

const addEvents = element => {
  element.addEventListener('click', () => {
    element.classList.toggle('selected')
  })
  element.addEventListener('dblclick', () => {
    element.parentNode.removeChild(element)
    undoHistory.push(list)
  })
}

undo.addEventListener('click', () => {
  let list = document.querySelector('#list')

  const arrayNodes = Array.from(undoHistory[0].childNodes)

  while (list.firstChild) {
    list.removeChild(list.firstChild)
  }
  arrayNodes.pop()
  arrayNodes.forEach(function (element) {
    list.appendChild(element)
  })
})
