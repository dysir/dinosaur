import BaseSprite from "./base/basesprite.js";
import BackGround from "./runtime/background.js";
import Databus from "./databus.js"
import Player from "./player/player.js"
import Tree from "./player/tree.js"
import Bird from "./player/bird.js"
import Collistion from "../js/base/collision.js"

let ctx = canvas.getContext('2d');
let databus = new Databus();
let basesprite = new BaseSprite();

export default class main{

  constructor(){
    this.aniId = 0;
    if (basesprite.complete){
      this.restart();
    }else{
      basesprite.onload = this.restart.bind(this);
    }
  }
  restart(){
    this.bg = new BackGround(ctx);
    this.dinosaur = new Player(20, databus.waterlevel);
    window.cancelAnimationFrame(this.aniId);
    this.render();

    if (!databus.gamestart) {
      this.startrender();
      return
    }
    this.bindLoop = this.loop.bind(this)
    this.aniId = window.requestAnimationFrame(
      this.bindLoop,
      canvas
    )
  }

  createenmey(){

    let enmeysecond = databus.enmeysecond;

    if (databus.frame==0||!this.numberenmey){
      this.numberenmey =parseInt( Math.random() * (enmeysecond[1] - enmeysecond[0]) + enmeysecond[0]);
    }

    if (databus.frame == this.numberenmey){
      let treeLink ;
      if (databus.gamelevel>=1&& parseInt(Math.random()*4) ==3){
        treeLink = databus.pool.getItemByClass("bird", Bird);
      }else{
        treeLink = databus.pool.getItemByClass("tree", Tree);
        console.log("x:" + treeLink.x);
        
      }
      treeLink.visible = true;
      databus.gtreelist.push(treeLink);
      this.numberenmey = databus.frame + parseInt( Math.random() * (enmeysecond[1] - enmeysecond[0]) + enmeysecond[0]);
    }
  }


  update(){
    this.createenmey();
  }

  startrender(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let that = this;

    databus.frame = 0;
    let rx = databus.innerWidth / 2;
    let ry = databus.innerHeight / 2;
    let s = 30;
    that.bg.drawToCanvas(ctx);
    that.dinosaur.drawToCanvas(ctx);
    ctx.beginPath();
    ctx.arc(rx, ry, 50, 0, 2 * Math.PI);
    ctx.fillStyle = "#676a6c";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(rx, ry, 48, 0, 2 * Math.PI);
    ctx.fillStyle = "#f3f3f4";
    ctx.fill();
    ctx.beginPath();
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.lineWidth = 5;
    ctx.moveTo(rx - Math.cos(Math.PI / 3) * s, ry - Math.sin(Math.PI / 3) * s);
    ctx.lineTo(rx - Math.cos(Math.PI / 3) * s, ry + Math.sin(Math.PI / 3) * s);
    ctx.lineTo(rx + s, ry);
    ctx.lineTo(rx - Math.cos(Math.PI / 3) * s, ry - Math.sin(Math.PI / 3) * s);
    ctx.strokeStyle = "#676a6c";
    ctx.stroke();
    let touchstart = () => {
      databus.gamestart = true;
      canvas.removeEventListener("touchstart", touchstart);
      databus.reset();
      that.restart();
    }
    canvas.addEventListener('touchstart', touchstart);

  
  }
  endrender(){
    let rx = databus.innerWidth / 2;
    let ry = databus.innerHeight / 2;
    let s = 30;
    ctx.beginPath();
    ctx.arc(rx, ry, 50, 0, 2 * Math.PI);
    ctx.fillStyle = "#676a6c";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(rx, ry, 48, 0, 2 * Math.PI);
    ctx.fillStyle = "#f3f3f4";
    ctx.fill();
    
    ctx.beginPath();
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.lineWidth = 5;
    ctx.moveTo(rx - Math.cos(Math.PI / 3) * s, ry - Math.sin(Math.PI / 3) * s);
    ctx.lineTo(rx - Math.cos(Math.PI / 3) * s, ry + Math.sin(Math.PI / 3) * s);
    ctx.lineTo(rx + s, ry);
    ctx.lineTo(rx - Math.cos(Math.PI / 3) * s, ry - Math.sin(Math.PI / 3) * s);
    ctx.strokeStyle = "#676a6c";
    ctx.stroke();
    let that = this;
    let touchstart = () => {
      databus.gamestart = true;
      canvas.removeEventListener("touchstart", touchstart);
      databus.reset();
      that.restart();
    }
    canvas.addEventListener('touchstart', touchstart);
  }
  render(){
    databus.conspeed();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (databus.gamelevel >= databus.gbblacklevel && (databus.frame % (databus.gbblacktime*60)==0 )){
      this.bg.changecolor = true;
    }
    this.bg.drawToCanvas(ctx);

    this.dinosaur.drawToCanvas(ctx);
    let that = this;
    databus.gtreelist.forEach((tree)=>{
      tree.update();
      tree.drawToCanvas(ctx);
      if (tree.linelist && that.dinosaur.linelist && Collistion(tree.linelist, that.dinosaur.linelist)){
        databus.gamestart = false
        this.endrender()
      }
    })

  }

  loop(){
    if (!databus.gamestart) {
      return
    }

    this.update();
    this.render();
    databus.frame++
    // this.test();
    this.aniId = window.requestAnimationFrame(
      this.bindLoop,
      canvas
    );
  }
  
}