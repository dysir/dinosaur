const screenWidth = window.innerWidth
const screenHeight = window.innerHeight

export default class BackGround{
  constructor(){

  }
  drawToCanvas(ctx){
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, screenWidth, screenHeight);
  }
}