import Pool from "./base/pool.js"
let instance;
export default class Databus{
  constructor(){
    if(instance){
      return instance;
    }
    instance =this;
    this.pool = new Pool();
    this.reset();
    this.gamestart = true;
  }
  reset(){

    /*
    0 1 2 三個階段等級
    20秒后進入節點 1 出現飛鳥
    四十秒后進入階段2 出現黑白交替沒5~20秒交替一次
    */ 
    this.gamelevel = 0;


    //一次跳躍幀數
    this.jumpsecond = 60 - this.gamelevel*10;
    //预定跳跃高度
    this.playheight = 200;
    //水平线
    this.waterlevel = 200;
    //障碍物出现频率  帧/个
    this.enmeysecond = [
      [65, 120],
      [65,120],
    ];

    this.arrrunspeed = [8, 4];
    this.runspeed = this.arrrunspeed[this.gamelevel];

  /*
    背景每幀移動像素
  */
    this.gamespeed = 3 + this.gamelevel;
    this.frame = 0;
    this.score = 0;

    this.gtreelist = [];
  }
  conspeed() {
    if (this.frame > 20 * 60) {
      this.gamelevel = 1;
    }
    //背景移速
    this.gamespeed = 3 * (this.gamelevel + 1);
    //奔跑移速
    this.runspeed = this.arrrunspeed[this.gamelevel];
    //一次跳躍幀數
    this.jumpsecond = 60 - this.gamelevel * 10;
  }

}