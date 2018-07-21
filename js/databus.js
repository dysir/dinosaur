import Pool from "./base/pool.js"
let instance;

export default class Databus{
  constructor(){
    if(instance){
      return instance;
    }
    instance =this;
    !this.pool ? this.pool= new Pool():"";

    this.levelnumber = 6;
    this.leveltime = 10;
    //一次跳躍幀數
    this.arrjumpsecond = [60, 52, 45, 40,40,40];
    //预定跳跃高度
    this.playheight = 170;
    //水平线
    this.waterlevel = 200;
    //障碍物出现频率  帧/个
    this.arrenmeysecond = [
      [60, 100],
      [65, 105],
      [70, 110],
      [75, 115],
      [80, 120],
      [85, 125],
    ];
    //跑步速度
    this.arrrunspeed = [6, 5,4, 3,3,3];
    /*
      背景每幀移動像素
    */
    this.arrgamespeed = [5, 7,9, 11,13,15];
    //出现黑白交替等级
    this.gbblacklevel = 3;
    //黑白交替时间
    this.gbblacktime = 20;

    this.reset();
    this.gamestart = false;

    this. screenWidth = window.innerWidth
    this. screenHeight = window.innerHeight

  }
  reset(){
    /*
    0 1 2 三個階段等級
    20秒后進入節點 1 出現飛鳥
    四十秒后進入階段2 出現黑白交替沒5~20秒交替一次
    */ 
    this.gamelevel = 0;
    this.enmeysecond = this.arrenmeysecond[this.gamelevel];
    this.runspeed = this.arrrunspeed[this.gamelevel];
    this.jumpsecond = this.arrjumpsecond[this.gamelevel];
    this.gamespeed = this.arrgamespeed[this.gamelevel];
    this.frame = 0;
    this.score = 0;
    this.gtreelist = [];
  }
  conspeed() {
    if (this.gamelevel < this.levelnumber-1 && this.frame > (this.leveltime + (this.gamelevel * this.gamelevel) ) * 60) {
      this.gamelevel ++;
    }
    this.enmeysecond = this.arrenmeysecond[this.gamelevel];
    this.runspeed = this.arrrunspeed[this.gamelevel];
    this.jumpsecond = this.arrjumpsecond[this.gamelevel];
    this.gamespeed = this.arrgamespeed[this.gamelevel];
    this.score += this.gamespeed / 10;
  }

}