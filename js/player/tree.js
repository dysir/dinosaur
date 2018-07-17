import DataBus from "../databus.js"
import Pool from "../base/pool.js"
import BaseSprite from "../base/basesprite.js";
const screenWidth = window.innerWidth
const screenHeight = window.innerHeight
let databus = new DataBus();

export default class Tree {
  constructor() {
    let BaseSprit = new BaseSprite();
    this.img = BaseSprit;
    this.visible = false;
    this.treelist = [
        [
          [230, 3, 16, 35, 0, 0, 16, 35],
          [246, 3, 16, 35, 0, 0, 16, 35],
          [262, 3, 16, 35, 0, 0, 16, 35],
          [278, 3, 16, 35, 0, 0, 16, 35],
          [296, 3, 16, 35, 0, 0, 16, 35],
          [312, 3, 16, 35, 0, 0, 16, 35],
        ],
        [
          [331, 3, 26, 46, 0, 0, 26, 46],
          [357, 3, 26, 46, 0, 0, 26, 46],
          [382, 3, 26, 46, 0, 0, 26, 46],
          [408, 3, 24, 46, 0, 0, 24, 46],
          [432, 3, 49, 46, 0, 0, 49, 46],
        ]
      ];

    let index1 = parseInt(Math.random() * this.treelist.length );
    let index2 = parseInt(Math.random() * this.treelist[index1].length);
    [...this.current] = this.treelist[index1][index2];
    if(index1 == 0){
      this.current[5] = 215;
    }else{
      this.current[5] = 200;      
    }
    this.current[4] = screenWidth;

    this.x = this.current[4];
    this.y = this.current[5];
    this.width = this.current[2];
    this.pool = new Pool();
    this.linelist = [];
  }

  drawToCanvas(ctx){
    if (!this.visible){
      return
    }
    ctx.drawImage(
      this.img,
      ...this.current
    );
    // ctx.strokeStyle = "#FF0000";
    // ctx.strokeRect(this.x+2, this.y+2, this.width-4, this.current[3]-4);
    this.linelist = [
      [this.x + 2, this.y + 2+ this.current[3]],
      [this.x + 2, this.y + 2],
      [this.x +this.width - 2, this.y + 2 ],
    ];
  }

  update(){
    this.x -= databus.gamespeed
    this.current[4] = this.x;
    if(this.x +this.width <0){
      this.visible = false;
      let index1 = parseInt(Math.random() * this.treelist.length);
      let index2 = parseInt(Math.random() * this.treelist[index1].length);
      this.current = this.treelist[index1][index2];
      databus.gtreelist.shift();
      this.pool.recover("tree" , this);
    }
  }

}