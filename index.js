store = { squares: []}
window.onload = function() {
  makeGridOfSquares()
  renderGrid(ctx)
  palette.render()

  $('body').on('click', '.color-picker', function(){
    palette.activeColor = this.dataset.color
  })
}

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext("2d");
const palette = new ColorPalette()

canvas.addEventListener('click', function(e){
  let x = e.layerX
	let y = e.layerY
	let square = Square.findByCoords(x,y)
  square.color = palette.activeColor
	renderGrid(ctx)
})

function makeRowOfSquares(y){
  for (let i = 0; i < 100; i++){
    x = (10 * i)
    let square = new Square(x,y)
  }
}

function makeGridOfSquares(){
  for (let i = 0; i < 100; i++){
    let y = i * 10
    makeRowOfSquares(y);
  }
}

function renderGrid(canvasContext){
  store.squares.forEach((square)=>{
    square.render(canvasContext)
  })
}
