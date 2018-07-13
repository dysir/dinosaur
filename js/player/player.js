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
  }

  drawToCanvas(ctx){
    let length = this.animationimg.length;

    if (databus.frame % parseInt(60 / (speed * length))==0 ){
      this.index++;
    }
    if (this.index >= length) {
      this.index = 0;
    }
 
    ctx.drawImage(
      this.img,
      this.animationimg[this.index],
      3,
      45,
      45,
      this.x,
      this.y,
      45,
      45
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