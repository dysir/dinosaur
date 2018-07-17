import BaseSprite from "./base/basesprite.js";
import BackGround from "./runtime/background.js";
import Databus from "./databus.js"
import Player from "./player/player.js"
import Tree from "./player/tree.js"
import Bird from "./player/bird.js"
import Pool from "./base/pool.js"
import Collistion from "../js/base/collision.js"

let ctx = canvas.getContext('2d');
let databus = new Databus();
let pool = new Pool();
export default class main{

  constructor(){
    this.aniId = 0;
    this.restart();
    // this.bird = new Bird();
  }

  // test(){
  //   this.bird.visible = true;
  //   this.bird.drawToCanvas(ctx);
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

    let enmeysecond = databus.enmeysecond[databus.gamelevel];

    if (!this.numberenmey){
      this.numberenmey =parseInt( Math.random() * (enmeysecond[1] - enmeysecond[0]) + enmeysecond[0]);
    }

    if (databus.frame == this.numberenmey){
      let treeLink ;
      if (databus.gamelevel>=1&& parseInt(Math.random()*4) ==3){
         treeLink = pool.getItemByClass("bird", Bird);
      }else{
         treeLink = pool.getItemByClass("tree", Tree);
      }
      treeLink.visible = true;
      databus.gtreelist.push(treeLink);
      this.numberenmey = databus.frame + parseInt( Math.random() * (enmeysecond[1] - enmeysecond[0]) + enmeysecond[0]);
    }
  }


  update(){
    this.createenmey();
  }
  render(){
    databus.conspeed();

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.bg.drawToCanvas(ctx);

    this.dinosaur.drawToCanvas(ctx);
    let that = this;
    databus.gtreelist.forEach((tree)=>{
      tree.update();
      tree.drawToCanvas(ctx);
      if (tree.linelist && that.dinosaur.linelist && Collistion(tree.linelist, that.dinosaur.linelist)){
        databus.gamestart = false
      }
    })

    // var imageDatas = ctx.getImageData(0, 0, canvas.width, canvas.height);
    // var dataArray = imageDatas.data;
    // for (var i = 0; i < dataArray.length; i += 4) {
    //   var r = 255 - dataArray[i];
    //   var g = 255 - dataArray[i + 1];
    //   var b = 255 - dataArray[i + 2];
    //   dataArray[i] = r;
    //   dataArray[i + 1] = g;
    //   dataArray[i + 2] = b;
    // }
    // ctx.putImageData(imageDatas, 0, 0);

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