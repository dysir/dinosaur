import BaseSprite from "./base/basesprite.js";
import Databus from "./databus.js"
import BackGround from "./runtime/background.js";
let ctx = canvas.getContext('2d');
let databus = new Databus();

export default class main{

  constructor(){
    this.aniId = 0;
    this.restart();

    // let dinosaur = new BaseSprite();
    // dinosaur.img.onload = function(){
    //   dinosaur.getDinosaur(ctx);
    // }

  }

  restart(){
    let bg = new BackGround(ctx);

    // window.cancelAnimationFrame(this.aniId);

    // this.bindLoop = this.loop.bind(this)

    // this.aniId = window.requestAnimationFrame(
    //   this.bindLoop,
    //   canvas
    // )
  }


  update(){

  }
  render(){

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