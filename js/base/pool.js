const GlobalPool = "GlobalPoolfudio3iu8239u8234";
export default class Pool{
  constructor(){
    this[GlobalPool] = {}
  }
  getPoolBySign(name){
    return this[GlobalPool].name||(this[GlobalPool].name = []);
  }

  getItemByClass(name , className){
    let pool = this.getPoolBySign(name);
    let result = (pool.length?pool.shift():new className());
    return result;
  }

  recover(name , instance){
    this[GlobalPool][name].push(instance);
  }
}