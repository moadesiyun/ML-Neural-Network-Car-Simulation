class Road{
  constructor(x,width,lanes=4){
    this.x=x;
    this.width=width;
    this.lanes=lanes;

    this.left=x-width/2;
    this.right=x+width/2;

    const infinity=1000000;
    this.top=-infinity;
    this.bottom=infinity;

    const topLeft={x:this.left,y:this.top};
    const topRight={x:this.right,y:this.top};
    const bottomLeft={x:this.left,y:this.bottom}; 
    const bottomRight={x:this.right,y:this.bottom};
    
    this.borders=[
            [topLeft,bottomLeft],
            [topRight,bottomRight]
             ];
  }

  getCenterLane(laneID){
    const laneWidth = this.width/this.lanes;
    return this.left+laneWidth/2 + Math.min(laneID,this.lanes-1)*laneWidth;
  }
  
  draw(ctxt){
    ctxt.lineWidth=5;
    ctxt.strokeStyle="white";
    
    for(let i=1;i<=this.lanes-1;i++){
      const x=lerp(
         this.left,
         this.right,
         i/this.lanes
      );
 
    ctxt.setLineDash([20,20]);
    ctxt.beginPath();
    ctxt.moveTo(x,this.top);
    ctxt.lineTo(x,this.bottom);
    ctxt.stroke();
    }
  ctxt.setLineDash([]);
    this.borders.forEach(border=>{
      ctxt.beginPath();
      ctxt.moveTo(border[0].x,border[0].y);
      ctxt.lineTo(border[1].x,border[1].y);
      ctxt.stroke();
    });
  }
}


