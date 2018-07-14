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
    //每秒跳跃次数
    this.jumpsecond = 4;
    //预定跳跃高度
    this.playheight = 200;
    //水平线
    this.waterlevel = 200;
    //障碍物出现频率  帧/个
    this.enmeysecond = 120;


    this.gamespeed = 3;
    this.frame = 0;
    this.score = 0;

    this.gtreelist = [];
  }

}