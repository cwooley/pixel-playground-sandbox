// let colors = ['rgb(255,0,0)', 'rgb(255,255,255)', 'rgb(0,0,255)', 'rgb(255, 187, 0)',  'rgb(118,42,145)', 'rgb(0, 255, 0)', 'rgb(255, 129, 0)', 'rgb(139,69,19)' ];
  let colors = ['black', 'maroon', 'green', 'navy', 'white', 'red', 'lime', 'blue', 'gray', 'purple', 'fuchsia', 'cyan', 'olive', 'yellow', 'magenta', 'teal' ]
class ColorPalette {

  constructor(activeColor){
    if (!activeColor){
      this.activeColor = 'rgb(255,255,255)'
    } else {
      this.activeColor = activeColor
    }
  }

  render(){

    let HTML = colors.map((color)=>{
      return `<div class="color-picker" data-color="${color}" style="background-color: ${color}; cursor:pointer; width: 25px; height: 25px; border-radius: 50%;">
      </div>`
    }).join(' ')
    $('#palette-goes-here').html(HTML)
  }

}
