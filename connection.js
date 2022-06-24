class Connection {
  constructor(element) {
    this.element1 = element;
  }
  
  render(){
    if(typeof this.element2 == 'undefined') {
      this.tempX = mouseX;
      this.tempY = mouseY;
    }
    else{
      this.tempX = this.element2.midXPos;
      this.tempY = this.element2.midYPos;
    }
    stroke(255*0.5);
    strokeWeight(2);
    line(this.element1.midXPos, this.element1.midYPos, this.tempX, this.tempY);
  }
  
  finishConnection(element){
    this.element2 = element;
  }
  
  isDead(){
    if(this.element1.isDead==true){
      return true;
    }
    if(typeof this.element2 !== 'undefined') {
      if(this.element2.isDead==true){
        return true;
      }
    }
    return false;
  }
}