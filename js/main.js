import BaseSprite from "./base/basesprite.js";
import BackGround from "./runtime/background.js";
import Databus from "./databus.js"
import Player from "./player/player.js"
import Tree from "./player/tree.js"
import Pool from "./base/pool.js"

let ctx = canvas.getContext('2d');
let databus = new Databus();
let pool = new Pool();
export default class main{

  constructor(){
    this.aniId = 0;
    this.restart();
    // this.tree = new Tree();
  }

  // test(){

  //   this. tree.visible = true;
  //   this. tree.drawToCanvas(ctx);
  // }

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
    if (databus.frame%databus.enmeysecond==0){
      let treeLink = pool.getItemByClass("tree",Tree);
      treeLink.visible = true;
      databus.gtreelist.push(treeLink);
    }
  }


  update(){
    this.createenmey();
  }
  render(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.bg.drawToCanvas(ctx);
    this.dinosaur.drawToCanvas(ctx);
    let that = this;
    databus.gtreelist.forEach((tree)=>{
      tree.update();
      tree.drawToCanvas(ctx);
      if (that.dinosaur.ifTouch(tree)){
        databus.gamestart = false
      }
    })
  }
  loop(){
    if( !databus.gamestart){
      return
    }
    databus.frame++
    this.update();
    this.render();
    // this.test();
    this.aniId = window.requestAnimationFrame(
      this.bindLoop,
      canvas
    );
  }
  
}