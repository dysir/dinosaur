import Sprite from "./sprite.js";
let baseimg;
let baseimgpath = "images/base.png";
export default class BaseSprite extends Sprite{
  constructor(){
    super()
    if(baseimg){
      return
    }
    baseimg =new Image();
    baseimg.src = baseimgpath;
    this.img = baseimg;
  }

  getDinosaur(ctx){
    ctx.drawImage(
      this.img,
      848, 0, 45, 48, 0, 0, 45, 48
    );
  }
  
}