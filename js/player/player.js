import BaseSprite from "../base/basesprite.js";
import DataBus from "../databus.js";

let databus = new DataBus();
//每秒播放次数
let speed = 2;
export default class Player extends BaseSprite{
  constructor(){
    super();

    this.animationimg = [848, 892,936,980,1024];
    this.index = 0;
  }

  drawToCanvas(ctx){
    let length = this.animationimg.length;

    if (databus.frame % (60 / (speed * length))==0 ){
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
      0,
      0,
      45,
      45
    );
  
    // ctx.drawImage(
    //   this.img,
    //   893,
    //   3,
    //   45,
    //   45,
    //   0,
    //   0,
    //   45,
    //   45
    // );

    // ctx.drawImage(
    //   this.img,
    //   0,
    //   100
    // );
  }
}