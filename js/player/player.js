import BaseSprite from "../base/basesprite.js";
import DataBus from "../databus.js";

let databus = new DataBus();
//每秒播放次数
let speed =2;
export default class Player extends BaseSprite{
  constructor(x , y){
    super();
    this.x = x;
    this.y = y;

    this.animationimg = [848, 892,936,980];
    this.index = 0;
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
}