import BaseSprite from "../base/basesprite.js";
import DataBus from "../databus.js";
let databus = new DataBus();
export default class BackGround{
  constructor(ctx){
    this.img = new BaseSprite();
    this.startx = 0;
    //開始反色處理
    this.changecolor = false;
    //w 白色 b 黑色
    this.bgcolor = 255;
    this.currentcolor = "w";
  }

  drawToCanvas(ctx){

    if (this.changecolor){
      if (this.currentcolor=="w"){
        this.bgcolor-=4;
        if (this.bgcolor <= 0){
          this.bgcolor = 0;
          this.currentcolor = "b";
          this.changecolor = false;
        }
      }else{
        this.bgcolor += 4;
        if (this.bgcolor >= 255) {
          this.bgcolor = 255;
          this.currentcolor = "w";
          this.changecolor = false;
        }
      }
    }
    ctx.fillStyle = "rgb(" + this.bgcolor + "," + this.bgcolor + "," + this.bgcolor +")";
    ctx.fillRect(0, 0, databus.screenWidth, databus.screenHeight);

    ctx.drawImage(
      this.img,
      0,
      55,
      databus.screenWidth+1,
      50,
      this.startx,
      databus.waterlevel+38,
      databus.screenWidth+1,
      50
    );
    ctx.drawImage(
      this.img,
      0,
      55,
      databus.screenWidth+1,
      50,
      this.startx + databus.screenWidth,
      databus.waterlevel + 38,
      databus.screenWidth+1,
      50
    );
    this.startx -= databus.gamespeed;

    this.changescro(ctx)
    if (this.startx < -databus.screenWidth){
      this.startx = 0;
    }
  }

  changescro(ctx){
    ctx.fillStyle = "#000000";
    ctx.fillText("分值:" + parseInt(databus.score), databus.screenWidth-100, 60);
  }
}