class pokemon {
    constructor(name){
      this.name = name
    }
}
function sayHello(){
  console.log('Mi pokemon ${this.name} te saluda')
}

function sayMessage(){
  console.log('Mi pokemon ${this.name} dice:')
}

module.exports= pokemon