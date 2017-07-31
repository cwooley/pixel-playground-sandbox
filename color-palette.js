let colors = ['rgb(255,0,0)', 'rgb(255,255,255)', 'rgb(0,0,255)' ];

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
      return `<div class="color-picker" data-color="${color}" style="background-color: ${color}; cursor:pointer; width: 25px; height: 25px;">
      </div>`
    }).join(' ')
    $('#palette-goes-here').html(HTML)
  }

}
