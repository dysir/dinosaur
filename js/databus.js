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
    this.frame = 0;
    this.score = 0;
    this.enemy = [];
  }
}