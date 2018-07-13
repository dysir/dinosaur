import DataBus from "../databus.js"
import BaseSprite from "../base/basesprite.js";
export default class Enemy{
  constructor(){
    let BaseSprit = new BaseSprite();
    this.img = BaseSprit;
    this.visible = false;
  }

  getenmey(ctx){
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