var DefaultSize = 16

const grid = document.getElementById("gridContainer")
const colorBtn = document.getElementById("colorBtn")//done
const colorPicker = document.getElementById("color")//done
const rainbowBtn = document.getElementById("rainbowBtn")//done
const eraserBtn = document.getElementById("eraserBtn")//done
const clearBtn = document.getElementById("clearBtn")//done
const blackBtn = document.getElementById("blackBtn") //done
const sizeValue = document.getElementById("sizeValue")
const sizeSlider = document.getElementById("sizeSlider")


function setupGrid(size){
  grid.style.gridTemplateColumns = (`repeat(${size}, 1fr`)
  grid.style.gridTemplateRows = (`repeat(${size}, 1fr`)
  for(let i = 0;  i < (size * size) ; i++){
    const div = document.createElement('div')
    div.style = 'background-color: white'
    grid.appendChild(div).classList.add('box')
  }
}
setupGrid(DefaultSize)

function color(){
  colorPicker.addEventListener('input', () => {
    let newColor = document.getElementById("color").value
    const boxs = grid.querySelectorAll('.box')
    colorBtn.addEventListener('click', () => {
      boxs.forEach(box => box.addEventListener('mouseover', () => {
        box.style.background = newColor
      }))
    })
  })
}
color()

function rgbColor(){
  const boxs = grid.querySelectorAll('.box')
  rainbowBtn.addEventListener('click', () => {
    boxs.forEach(box => box.addEventListener('mouseover', () => {
      let R = Math.floor(Math.random() * 255)
      let G = Math.floor(Math.random() * 255)
      let B = Math.floor(Math.random() * 255)
      box.style.background = `rgb(${R},${G},${B})`
    }))
  })
}
rgbColor()

function eraseColor(){
  const boxs = grid.querySelectorAll('.box')
  eraserBtn.addEventListener('click', () => {
    boxs.forEach(box => box.addEventListener('mouseover', () => {
      box.style.background = 'white'
    }))
  })
}
eraseColor()

function clear(){
  const boxs = grid.querySelectorAll('.box')
  clearBtn.addEventListener('click', () => {
    boxs.forEach((item) => {
      item.style.background = 'white'
    })
  })
}
clear()

function blackColor(){
  const boxs = grid.querySelectorAll('.box')
  blackBtn.addEventListener('click', () => {
    boxs.forEach(box => box.addEventListener('mouseover', () => {
      box.style.background = 'black'
    }))
  })
}
blackColor()
