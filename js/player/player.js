import BaseSprite from "../base/basesprite.js";
import DataBus from "../databus.js";
import Jump from "../base/jump.js"

let databus = new DataBus();
//每秒播放次数
let speed = databus.jumpsecond;
export default class Player{
  constructor(x , y){

    // let BaseSprite = new BaseSprite();
    this.img = new BaseSprite();

    this.x = x;
    this.y = y;
    this.jobj = new Jump(this.y, databus.playheight, speed);
    this.animationimg = [ 892,936,980];
    this.index = 0;
    this.play = false;
    this.initEvent();

    this.width = 44;
    this.height = 45;
    this.linelist = [];
  }

  ifTouch(sp){
    return !!((this.x + this.width > sp.x && this.x + this.width < sp.x + sp.width && this.y + this.height > sp.y) || 
    (this.x > sp.x && this.x < sp.x + sp.width && this.y + this.height > sp.y))
  }

  drawToCanvas(ctx){
    let length = this.animationimg.length;

    if (databus.frame % databus.runspeed==0 ){
      this.index++;
    }
    if (this.index >= length) {
      this.index = 0;
    }
    // ctx.strokeStyle = "#FF0000";
    // ctx.strokeRect(this.x, this.y, this.width, this.height);
  
    // ctx.beginPath();
    // ctx.moveTo(this.x+2, this.y + this.height / 4);
    // ctx.lineTo(this.x + this.width/2, this.y+2);
    // ctx.lineTo(this.x + this.width-2, this.y-2);
    // ctx.lineTo(this.x + this.width-2, this.y + this.height / 4-2);
    // ctx.lineTo(this.x + this.width / 2-2, this.y + this.height-2);
    // ctx.lineTo(this.x + this.width / 4, this.y + this.height-2);
    // ctx.lineTo(this.x+2 , this.y+this.height/2);
    // ctx.strokeStyle = "red";
    // ctx.stroke();

    this.linelist = [
      [this.x + 2, this.y + this.height / 4],
      [this.x + this.width / 2, this.y + 2],
      [this.x + this.width - 2, this.y - 2],
      [this.x + this.width - 2, this.y + this.height / 4 - 2],
      [this.x + this.width / 2 - 2, this.y + this.height - 2],
      [this.x + this.width / 4, this.y + this.height - 2],
      [this.x + 2, this.y + this.height / 2],
    ];
    ctx.drawImage(
      this.img,
      this.animationimg[this.index],
      3,
      this.width ,
      this.height,
      this.x,
      this.y,
      this.width ,
      this.height
    );
  
  }

  initEvent(){
    canvas.addEventListener('touchstart',this.jump.bind(this));
  }
  jump(e){
    this.jobj.run = true;
    if(!this.play){
      this.play = setInterval(this.frameloop.bind(this) , 1000/60);
    }
  }

  frameloop(){
  
    this.jobj.getCurrentLocal();
    this.y = this.jobj.y;
    if (!this.jobj.run){
      clearInterval(this.play);
      this.play = false;
    }
  }
}