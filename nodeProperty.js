class NodeProperty {
  constructor(gunNodeContext) {
    this.context = gunNodeContext;
    this.context.get('val').once( (v)=>{this.val = v} );
    this.context.get('val').on( (v)=>{this.val = v} );
  }
  get value(){
    return this.val;
  }
  set value(val){
    if((typeof val === 'string') || ((typeof val === 'number') && !isNaN(val)) || (typeof val === 'boolean') || (val === null)){
      this.val=val;
      this.context.get("val").put(val);
    }else{
      console.log('The value "' + val + '" was not assigned. Node properties must be strings, numbers, booleans, or null.');
    }
  }
}