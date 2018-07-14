import BaseSprite from "../base/basesprite.js";
import DataBus from "../databus.js";
const screenWidth = window.innerWidth
const screenHeight = window.innerHeight

let databus = new DataBus();
export default class BackGround{
  constructor(ctx){
    this.img = new BaseSprite();
    this.startx = 0;
  }

  drawToCanvas(ctx){
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, screenWidth, screenHeight);

    ctx.drawImage(
      this.img,
      0,
      55,
      screenWidth+1,
      50,
      this.startx,
      databus.waterlevel+38,
      screenWidth+1,
      50
    );
    ctx.drawImage(
      this.img,
      0,
      55,
      screenWidth+1,
      50,
      this.startx + screenWidth,
      databus.waterlevel + 38,
      screenWidth+1,
      50
    );
    this.startx -= databus.gamespeed
    if (this.startx < -screenWidth){
      this.startx = 0;
    }
  }
}