/// <reference path="./libraries/p5.global-mode.d.ts" />

let db;
let myElementTarget;
let myElementHandler;
let myNodeContext;
let myProperty;
let val = 0;
let proxy;

let mouseDragging = false;
let elementJustSelected = false;
let makingConnection = false;
let justStartedConnection = false;
let indexOfGrowingConnection = 0;
const ELEMENTS = 'Elements_b5bc830e2e2d';

function setup() {
  localStorage.clear();
  createCanvas(windowWidth, windowHeight);
  console.clear();
  rectMode(CORNERS)
  db = new Database();
}

function draw(){
  background(255*0.13)
  for(let i = db.connections.length-1; i >= 0; i--){
    if(db.connections[i].isDead()){ db.connections.splice(i,1); }
    else{ db.connections[i].render(); }
  }
  for(let i = db.elements.length-1; i >= 0; i--){
    if(db.elements[i].isDead()){ db.elements.splice(i,1); }
    else{ db.elements[i].render(); }
  }
}

function mouseDragged() {
  mouseDragging = true;
}

function mouseReleased(){
  let someSelected = countSelected();
  if(elementJustSelected==false && someSelected){
    deleteEmptyElements();
    deselectAll();
  }
  if(someSelected==false && mouseDragging==false){
    db.newElement(true, mouseX,mouseY);
  }
  let index = indexOfElementUnderMouse();
  if(keyIsDown(SHIFT) && isElementUnderMouse() && makingConnection==false && justStartedConnection==false){
    db.connections.push(new Connection(db.elements[index]));
    indexOfGrowingConnection = db.connections.length-1;
    makingConnection=true;
    justStartedConnection=true;
  }
  if(isElementUnderMouse() && makingConnection==true && justStartedConnection==false){
    db.connections[indexOfGrowingConnection].finishConnection(db.elements[index])
    makingConnection=false;
  }
  justStartedConnection=false;
  if(isElementUnderMouse() && mouseDragging==false && !keyIsDown(CONTROL)){
    deselectAll();
    db.elements[index].select();
    deleteEmptyElements();
  }
  dedragAll();
  mouseDragging = false;
  elementJustSelected = false;
}

function mousePressed(){
  let index = indexOfElementUnderMouse();
  if(isElementUnderMouse()){
    if(keyIsDown(CONTROL) || (db.elements[index].isSelected)){
      //keep selected
    }
    else{
      deselectAll();
    }
    db.elements[index].select();
    elementJustSelected = true;
    setSelectedDragged();
    bringToFront(index);
    deleteEmptyElements();
  }
}

function keyPressed(){
  if(keyCode==DELETE){
    deleteSelected();
  }
  if(isElementEditing()){
    let index = indexOfElementEditing();
    if(keyCode==BACKSPACE){
      db.elements[index].text = db.elements[index].text.slice(0,-1);
    }
  }
}

function keyTyped() {
  if(isElementEditing()){
    if(key=="Enter"){
      let index = indexOfElementEditing();
      if(db.elements[index].content===""){
        db.elements.splice(index,1);
        return;
      }
      deselectAll();
      newElement(true, db.elements[index].xPos, db.elements[index].nextLineY)
    }
    else{
      appendEditing(key);
    }
  }
}


//add the elements array to each local element object so it can delete itself
//clean up the element class. remove getters and setters and use normal functions.
//replace $variables with _variables
//separate the node and element classes with inheretance.
//create the link class and corresponding link nodes
//get links working
//add groups as a special type of link.



//add if more than 10 selected, stop live-syncing the data.

