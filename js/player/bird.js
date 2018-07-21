import DataBus from "../databus.js"
import BaseSprite from "../base/basesprite.js";
let databus = new DataBus();

export default class Bird {
  constructor() {
    let BaseSprit = new BaseSprite();
    this.img = BaseSprit;
    this.visible = false;
    this.treelist = [
      [132, 6, 50, 35, databus.screenWidth, 185, 50, 35],
      [178, 6, 50, 35, databus.screenWidth, 185, 50, 35],
    ];
    this.current =0;
    this.x = this.treelist[this.current][4];
    this.y = this.treelist[this.current][5];
    this.width = this.treelist[this.current][2];
    this.linelist = [];
  }

  drawToCanvas(ctx) {
    if (!this.visible) {
      return
    }
    if( databus.frame % 10 == 0){
      this.current == 1 ? this.current = 0 : this.current =1;
    }
    // ctx.beginPath();
    // ctx.moveTo(this.x+2, this.y + this.height / 4);
    // ctx.lineTo(this.x + this.width/2, this.y+2);
    // ctx.beginPath();
    // ctx.moveTo(this.x + 5, this.y + 12);
    // ctx.lineTo(this.x + 12, this.y + 2);
    // ctx.lineTo(this.x + this.width - 4, this.y + 18);
    // ctx.lineTo(this.x + this.width / 2, this.y + 30);
    // ctx.lineTo(this.x + 5, this.y + 12);
    // ctx.strokeStyle = "red";
    // ctx.stroke();

    this.linelist = [
      [this.x + 5, this.y + 12],
      [this.x + 12, this.y + 2],
      [this.x + this.width - 4, this.y + 18],
      [this.x + this.width / 2, this.y + 30],
      [this.x + 5, this.y + 12],
    ];
    ctx.drawImage(
      this.img,
      ...this.treelist[this.current]
    );
  }

  update() {
    this.x -= databus.gamespeed
    this.treelist[0][4] = this.x;
    this.treelist[1][4] = this.x;
    if (this.x + this.width < 0) {
      this.visible = false;
      this.x = databus.screenWidth;
      parseInt(Math.random() * 2) == 1 ? this.y = 185 : this.y= 160;
      this.treelist[0][5] = this.y;
      this.treelist[1][5] = this.y;
      console.log(this.treelist[1][5]);
      databus.gtreelist.shift();
      databus.pool.recover("bird", this);
    }
  }

}