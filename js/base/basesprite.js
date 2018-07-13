let baseimg;
let baseimgpath;
export default class BaseSprite{
  constructor(){
    if(baseimg){
      return baseimg;
    }
    baseimgpath = "images/base.png";
    baseimg =new Image();
    baseimg.src = baseimgpath;
    this.img = baseimg;
    return baseimg
  }
}