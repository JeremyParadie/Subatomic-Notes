class Database {

  //a single Database instance is created for the application. 
  //it contains all the objects that will be used.

  constructor(){
    this.gun = new Gun(['http://localhost:8765/gun','https://gun-manhattan.herokuapp.com/gun']);
    this.elements = [];
    this.connections = [];
    this.gun.get(ELEMENTS).map().once(this.onNewElementFromGun.bind(this));
  }

  onNewElementFromGun(node, soul){
    if(!this.soulIsInElements(soul) && !(node===null) /* && node.dead===false*/){ //check that I can remove this check. I shouldn't ever get a node that ===null or whose dead===false
      this.newElement(false, undefined, undefined, soul);
    }
  }

  soulIsInElements(soul){
    let inElements = false;
    for (const element of this.elements) {
      if(element._context._.soul === soul){
        inElements = true;
      }
    }
    return inElements;
  }

  newElement(isNew, x, y, soul){ //If isNew is true, x and y must be defined, and soul may be undefined. If isNew is false, x and y may be undefined, and soul must be defined.
    if(isNew){ soul = this.generateSoul(); }
    let element = new Element(isNew, this.gun.get(soul), x, y);
    this.elements.push(element);
    this.gun.get(ELEMENTS).set(this.gun.get(soul));
    return element;
  }

  generateSoul(){
    let name = 'element_' + new Date().getTime().toString().padStart(16,"0") + "_" + Math.round(Math.random()*10000000000000000).toString().padStart(16,"0");
    return name;
  }

  /* 
  in main.js, you do 
  db = new Database()
  Database creates an instance of gun as a member 
  Database creates the elements and their handlers.
  db.newElement()
  creates and returns a new element
  in main.js, I have the ability to write 
  db.getGroup(groupname)
      which returns an array of proxy objects, who can individually be manipulated like:
  
  element.property
  element.element.property
  element.element.element.property

  hard to tell at this point if this interface is a bad idea. I think it is what I want.
  */

}