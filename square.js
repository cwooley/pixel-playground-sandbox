function createSquare(){
  let id = 0
  let width = 10
  let height = 10
  return class {
    constructor(x,y,color){
      this.width = width
      this.height = height
      this.x = x
      this.y = y
      if (!color){
        this.color = 'rgb(255,255,255)'
      } else {
        this.color = color
      }
      this.id = ++id
      store.squares.push(this)
    }
    render(canvasContext){
      ctx.fillStyle = `rgb(${r},${g},${b})`
      ctx.fillStyle = this.color
      canvasContext.fillRect(this.x, this.y, 10, 10)
    }

    static findByCoords(x,y){
      return store.squares.filter((square)=>{
        return square.x === x && square.y === y
      })[0]
    }
  }
}
let Square = createSquare()