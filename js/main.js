import BaseSprite from "./base/basesprite.js";
import BackGround from "./runtime/background.js";
import Databus from "./databus.js"
import Player from "./player/player.js"
import Jump from "./base/jump.js"

let ctx = canvas.getContext('2d');
let databus = new Databus();

export default class main{

  constructor(){
    this.aniId = 0;
    this.restart();

  }

  restart(){
    this.bg = new BackGround(ctx);
    this.dinosaur = new Player(20 , 200);
    this.jump = new Jump(200);

    window.cancelAnimationFrame(this.aniId);

    this.bindLoop = this.loop.bind(this)

    this.aniId = window.requestAnimationFrame(
      this.bindLoop,
      canvas
    )
  }


  update(){

  }
  render(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    this.bg.drawToCanvas(ctx);
    this.jump.getCurrentLocal();
    this.dinosaur.y = this.jump.y;
    // console.log(this.Jump.y);
    this.dinosaur.drawToCanvas(ctx);
  }
  loop(){
    databus.frame++;
  
    this.update();
    this.render();
    this.aniId = window.requestAnimationFrame(
      this.bindLoop,
      canvas
    );
  }
  
}