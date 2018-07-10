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
  }
  reset(){
    //一次跳跃执行秒数
    this.second = 1;
    //预定跳跃高度
    this.playheight = 100;
    this.frame = 0;
    this.score = 0;
    this.enemy = [];
  }
}