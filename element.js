class Element {

  //member variables that start with $ are automatically synced to gun by the proxy handler.
  //member variables that start with _ are created and used by the proxy handler. Please ignore these.

  constructor(isNew, context, xPos, yPos) { //If isNew is true, context, xPos, and yPos must be defined. If isNew is false, context must be defined, but xPos and yPos may be undefined.
    this._context = context;
    this.textSize = 25;
    this.isDragging = false;
    this.mousePressed = false;
    this.cursorPosition = 0;
    this.isSelected = false;
    this.isEditing = false;
    if(isNew){
      this.$xPos = xPos;
      this.$yPos = yPos; 
      this.$text = '';
      this.$dead = false;
      this.isSelected = true;
      this.isEditing = true;
      this._context.get('xPos').put(this.$xPos);
      this._context.get('yPos').put(this.$yPos);
      this._context.get('text').put(this.$text);
      this._context.get('dead').put(this.$dead);
    }
    //the following lines are synchronous.
    this._context.get('xPos').on( (v)=>{this.$xPos = v} );
    this._context.get('yPos').on( (v)=>{this.$yPos = v} );
    this._context.get('text').on( (v)=>{this.$text = v} );
    this._context.get('dead').on( (v)=>{this.$dead = v} );
  }

  get xPos(){ return this.$xPos; }
  set xPos(newXPos){
    this.$xPos=newXPos;
    this._context.get("xPos").put(newXPos);
  }

  get yPos(){ return this.$yPos; }
  set yPos(newYPos){
    this.$yPos=newYPos;
    this._context.get("yPos").put(newYPos);
  }

  get text(){ return this.$text; }
  set text(newText){
    this.$text=newText;
    this._context.get("text").put(newText);
  }

  get dead(){ return this.$dead; }
  set dead(newDead){
    this.$dead=newDead;
    this._context.get("dead").put(newDead);
    if(newDead===true){
      this._context.get('text').put('');
      this._context.back(Infinity).get(ELEMENTS).unset(this._context);
    }
  }
  
  render(){
    if(this.isDragging==true){
      this.xPos = mouseX - this.relativeMouseX;
      this.yPos = mouseY - this.relativeMouseY;
    }
    if(this.isSelected){
      strokeWeight(this.radius*0.65);
      stroke(255*0.5);
    }
    else{
      strokeWeight(this.radius*0.15);
      stroke(255*0.4);
    }
    textSize(this.textSize);
    this.radius = this.textSize*0.2;
    this.textPadding = this.textSize*0.3;
    this.width = textWidth(this.$text);
    this.height = textAscent()*0.8;
    this.textYOffset = textAscent()/2;
    this.rectX1 = this.$xPos - this.textPadding*0.8;
    this.rectY1 = this.$yPos - this.textPadding;
    this.rectX2 = this.$xPos + this.width + this.textPadding*0.8;
    this.rectY2 = this.$yPos + this.height + this.textPadding;
    this.nextLineY = (this.rectY2 - this.rectY1) + this.$yPos + this.textSize*0.2;
    this.midXPos = this.$xPos + this.width/2;
    this.midYPos = this.$yPos + this.height/2;
    fill(255*0.25)
    rect(this.rectX1,this.rectY1,this.rectX2,this.rectY2,this.radius);
    noStroke();
    fill(255)
    text(this.$text,this.$xPos,this.$yPos+this.height);
  }
  
  handleMouse(){ //deprecated
    if(mouseIsPressed==false){
      this.isDragging = false;
      this.mousePressed = false;
    }
    if(mouseIsPressed==true && this.mousePressed==false){
      this.mousePressed = true;
      this.mouseJustPressed = true;
    }else{
      this.mouseJustPressed = false
    }
    if(this.isDragging==false && this.mouseJustPressed && mouseX>this.rectX1 && mouseX<this.rectX2 && mouseY>this.rectY1 && mouseY<this.rectY2){
      this.isSelected = true;
      this.isDragging = true;
      this.relativeMouseX = mouseX - this.$xPos;
      this.relativeMouseY = mouseY - this.$yPos;
    }
    if(this.isDragging==true){
      this.xPos = mouseX - this.relativeMouseX;
      this.yPos = mouseY - this.relativeMouseY;
    }
  }
  
  select(){
    this.isSelected = true;
  }
  
  deselect(){
    this.isSelected = false;
    this.isEditing = false;
  }
  
  setDragged(){
    this.isDragging = true;
    this.relativeMouseX = mouseX - this.$xPos;
    this.relativeMouseY = mouseY - this.$yPos;
  }
  
  dedrag(){
    this.isDragging = false;
  }
  
  contains(x,y){
    if(mouseX>this.rectX1 && mouseX<this.rectX2 && mouseY>this.rectY1 && mouseY<this.rectY2){
      return true;
    }
    else{
      return false;
    }
  }
  
  isEmpty(){
    if(this.$text===""){
      return true
    }
    else{
      return false
    }
  }
  
  append(char){
    this.text = this.$text + char;
  }
  
  delete(){
    this.dead = true;
  }

  isDead(){
    return this.$dead;
  }
}