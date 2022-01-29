var DefaultSize = 16

const grid = document.getElementById("gridContainer")
const colorPicker = document.getElementById("color")
const rainbowBtn = document.getElementById("rainbowBtn")
const eraserBtn = document.getElementById("eraserBtn")
const clearBtn = document.getElementById("clearBtn")
const blackBtn = document.getElementById("blackBtn") 
const sizeValue = document.getElementById("sizeValue")
const sizeSlider = document.getElementById("sizeSlider")

colorPicker.onclick = () => color()
blackBtn.onclick = () => blackColor()
rainbowBtn.onclick = () => rgbColor()
eraserBtn.onclick = () => eraseColor()
clearBtn.onclick = () => reloadGrid()
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value)

setupGrid(DefaultSize)

function setupGrid(size){
  grid.style.gridTemplateColumns = (`repeat(${size}, 1fr`)
  grid.style.gridTemplateRows = (`repeat(${size}, 1fr`)
  for(let i = 0;  i < (size * size) ; i++){
    const div = document.createElement('div')
    div.style = 'background-color: white'
    grid.appendChild(div).classList.add('box')
  }
}

function color(){
  colorPicker.addEventListener('input', () => {
    let newColor = document.getElementById("color").value
    const boxs = grid.querySelectorAll('.box')
    boxs.forEach(box => box.addEventListener('mouseover', () => {
      box.style.background = newColor
    }))
  })
}

function rgbColor(){
  const boxs = grid.querySelectorAll('.box')
  boxs.forEach(box => box.addEventListener('mouseover', () => {
    let R = Math.floor(Math.random() * 255)
    let G = Math.floor(Math.random() * 255)
    let B = Math.floor(Math.random() * 255)
    box.style.background = `rgb(${R},${G},${B})`
  }))
}

function eraseColor(){
  const boxs = grid.querySelectorAll('.box')
  boxs.forEach(box => box.addEventListener('mouseover', () => {
    box.style.background = 'white'
  }))
}

function clear(){
  grid.innerHTML = ''
}

function reloadGrid(){
  clear()
  setupGrid(DefaultSize)
}

function blackColor(){
  const boxs = grid.querySelectorAll('.box')
  boxs.forEach(box => box.addEventListener('mouseover', () => {
    box.style.background = 'black'
  }))
}

function updateSizeValue(value) {
  sizeValue.innerHTML = `${value} x ${value}`
}
