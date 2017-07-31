window.onload = function() {
  let canvas = document.getElementById('myCanvas');
  // var canvas = $('#myCanvas')[0]
  var ctx = canvas.getContext("2d");
  fillGrid();
}



function fillRow(y){
  for (let i = 0; i < 100; i++){
    x = (10 * i)
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    ctx.fillStyle = `rgb(${r},${g},${b})`

    ctx.fillRect(x, y, 10, 10)
  }
}

function fillGrid(){
  for (let i = 0; i < 100; i++){
    let y = i * 10
    fillRow(y);
  }
}

canvas.addEventListener('click', function(e){
	let x = e.layerX
	let y = e.layerY

	while(x % 10 != 0 ){
		x -= 1
    }

	while(y % 10 != 0 ){
		y -= 1
    }
	ctx.fillStyle = 'rgb(0,0,0)'
	ctx.fillRect(x, y, 10, 10)
})
