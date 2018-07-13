import BaseSprite from "./base/basesprite.js";
import BackGround from "./runtime/background.js";
import Databus from "./databus.js"
import Player from "./player/player.js"
import Tree from "./player/tree.js"


let ctx = canvas.getContext('2d');
let databus = new Databus();

export default class main{

  constructor(){
    this.aniId = 0;
    this.restart();
    this.tree = new Tree();
  }

  test(){

    this. tree.visible = true;
    this. tree.drawToCanvas(ctx);
  }

  restart(){
    this.bg = new BackGround(ctx);
    this.dinosaur = new Player(20, databus.waterlevel);
    window.cancelAnimationFrame(this.aniId);
    this.bindLoop = this.loop.bind(this);
    this.aniId = window.requestAnimationFrame(
      this.bindLoop,
      canvas
    )
  }

  createenmey(){

  }


  update(){

  }
  render(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.bg.drawToCanvas(ctx);
    this.dinosaur.drawToCanvas(ctx);
  }
  loop(){
    databus.frame++
    this.update();
    this.render();
    this.test();
    this.aniId = window.requestAnimationFrame(
      this.bindLoop,
      canvas
    );
  }
  
}