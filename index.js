store = { squares: []}

window.onload = function() {
  makeGridOfSquares()
  renderGrid(ctx)

}

let canvas = document.getElementById('myCanvas');
// var canvas = $('#myCanvas')[0]
var ctx = canvas.getContext("2d");
function fillRow(y){

}

function fillGrid(){

}

canvas.addEventListener('click', function(e){
	let x = e.layerX
	let y = e.layerY

	let square = Square.findByCoords(x,y)

  square.color = 'rgb(255,0,0)'
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
