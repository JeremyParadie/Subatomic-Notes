function countSelected(){
  let count = 0;
  for(let i = 0; i < db.elements.length; i++){
    if(db.elements[i].isSelected){
      count++;
    }
  }
  return count;
}

function deselectAll(){
  for(let i = 0; i < db.elements.length; i++){
      db.elements[i].deselect();
  }
}

function dedragAll(){
  for(let i = 0; i < db.elements.length; i++){
      db.elements[i].dedrag();
  }
}

function indexOfElementUnderMouse(){
  for(let i = db.elements.length-1; i >= 0; i--){
    if(db.elements[i].contains(mouseX,mouseY)){
      return i;
    }
  }
}

function isElementUnderMouse(){
  for(let i = db.elements.length-1; i >= 0; i--){
    if(db.elements[i].contains(mouseX,mouseY)){
      return true;
    }
  }
  return false;
}

function bringToFront(index){
  db.elements.push(db.elements[index]);
  db.elements.splice(index,1);
}

function setSelectedDragged(){
  for(let i = 0; i < db.elements.length; i++){
    if(db.elements[i].isSelected){
      db.elements[i].setDragged();
    }
  }
}

function deleteSelected(){
  for(let i = db.elements.length-1; i >= 0; i--){
    if(db.elements[i].isSelected){
      db.elements[i].delete();
    }
  }
}

function deleteEmptyElements(){
  for(let i = db.elements.length-1; i >= 0; i--){
    if(db.elements[i].isEmpty()){
      db.elements[i].delete();
    }
  }
}

function appendEditing(char){
  for(let i = 0; i < db.elements.length; i++){
    if(db.elements[i].isEditing){
      db.elements[i].append(char);
    }
  }
}

function isElementEditing(){
  for(let i = 0; i < db.elements.length; i++){
    if(db.elements[i].isEditing){
      return true;
    }
  }
  return false;
}

function indexOfElementEditing(){
  for(let i = 0; i < db.elements.length; i++){
    if(db.elements[i].isEditing){
      return i;
    }
  }
}