
export default class Sprite{

   constructor(){
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.visible = false;
    this.img = null;
   }

  drawToCanvas(ctx){
    if(!this.visible){
      return
    }
    ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  isCollideWith(sp){
    let spx = sp.x + sp.width / 2;
    let spy = sp.y + sp.height/ 2;
    if(!this.visible||!sp.visible){
      return false;
    }
    return !!(spx>=this.x&&spx<=(this.x+this.width)&&spy>=this.y&&spy<=(this.y+this.height));
  }
}