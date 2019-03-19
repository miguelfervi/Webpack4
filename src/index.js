import './main.css'

const add = document.getElementById('add')
const remove = document.getElementById('remove')
const undo = document.getElementById('undo')
let totalList = document.getElementById('list')

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
    undoHistory.push(totalList)
  }
})
remove.addEventListener('click', () => {
  const items = document.querySelectorAll('.item')

  items.forEach((element) => {
    if (element.classList.contains('selected')) {
      element.parentNode.removeChild(element)
      undoHistory.push(totalList)
    }
  })
})

const addEvents = element => {
  element.addEventListener('click', () => {
    element.classList.toggle('selected')
  })
  element.addEventListener('dblclick', () => {
    element.parentNode.removeChild(element)
    undoHistory.push(totalList)
  })
}

undo.addEventListener('click', () => {
  console.log('totalList', totalList)

  console.log(undoHistory)
  while (totalList.firstChild) {
    totalList.removeChild(totalList.firstChild)
  }
  undoHistory.pop()
  console.log(undoHistory)

  var lastPosition = undoHistory.length - 1

  console.log(lastPosition)
  console.log('undo list', undoHistory[lastPosition])
})
