class pokemon {
    constructor(name){
      this.name = name
    }
    sayHello(){
    console.log(`Mi pokemon ${this.name} te saluda!`)
    }

    sayMessage(){
    console.log(`Mi pokemon ${this.name} dice: "Hey!"`)
    }
}

module.exports= pokemon