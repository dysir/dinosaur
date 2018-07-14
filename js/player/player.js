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
    this.jobj = new Jump(this.y, databus.playheight );
    this.animationimg = [ 892,936,980];
    this.index = 0;
    this.play = false;
    this.initEvent();

    this.width = 45;
    this.height = 45;
  }

  ifTouch(sp){
    return !!((this.x + this.width > sp.x && this.x + this.width < sp.x + sp.width && this.y + this.height > sp.y) || 
    (this.x > sp.x && this.x < sp.x + sp.width && this.y + this.height > sp.y))
  }

  drawToCanvas(ctx){
    let length = this.animationimg.length;

    if (databus.frame % parseInt(60 / (speed * length))==0 ){
      this.index++;
    }
    if (this.index >= length) {
      this.index = 0;
    }
    ctx.strokeStyle = "#FF0000";
    ctx.strokeRect(this.x, this.y, this.width, this.height);
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