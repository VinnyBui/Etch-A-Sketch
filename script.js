const DefaultSize = 16

const body = document.querySelector("body")
const grid = document.querySelector(".grid-container")

function setupGrid(size){
  grid.style.gridTemplateColumns = (`repeat(${size}, 1fr`)
  grid.style.gridTemplateRows = (`repeat(${size}, 1fr`)
  let numofGrid = size * size
  for(let i = 0;  i< numofGrid ; i++){
    const div = document.createElement('div')
    div.style = 'background-color: white'
    grid.appendChild(div)
  }
}

setupGrid(DefaultSize)