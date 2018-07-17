import DataBus from "../databus.js"
export default class Jump{
  constructor(online  , maxheight = 200  , ttl =60 ,loop = false){
    //水平线
    this.online = online;
    //最大高度
    this.maxheight = maxheight;
    //执行时间
    this.ttl = ttl;
    this.timer = 0;
    //執行一次跳躍的陣 最大不超鍋60
    
    let frame = ttl;
    this.g = Math.ceil(2000*(this.maxheight)/Math.pow(frame , 2))/1000  ;

    this.initial = (this.g)*(frame);
    this.y = this.online;
    this.goback = true;

    this.loop = loop;
    this.run = false;

  }

  getCurrentLocal(){

    if(!this.run){
      return
    }
    this.timer++;
    if(this.timer >60){
      this.timer = 0;
    }

    if(this.goback){
      let s = this.initial * this.timer - this.g * this.timer * this.timer;
      s = Math.ceil(1000 *s) / 1000;

      this.y =  this.online-s;

      if ((this.initial - this.g * this.timer) <= 0){
        this.goback = false;
        this.timer = 0;
      }
    }else{
      let s = parseInt(this.g * this.timer * this.timer/2 );
      this.y =  this.online + s ;
      if (this.y >= this.online){
        this.y = this.online;
        this.timer = 0;
        this.goback = true;
        !this.loop?this.run = false:"";
      }
    }
  }
}