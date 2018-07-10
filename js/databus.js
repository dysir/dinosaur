import Pool from "./base/pool.js"
let instance;
export default class Databus{
  constructor(){
    if(instance){
      return instance;
    }
    this.pool = new Pool();
    this.reset();
  }
  reset(){
    this.frame = 0;
    
  }
}