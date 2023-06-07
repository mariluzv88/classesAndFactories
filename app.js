class Hamster  {
    owner =""
    name =""
    price = 15

    constructor(owner,name,price){
        this.owner = owner
        this.name = name
        this.price = price
    }

    wheelRun(){
    console.log("Squeak Squeak")
    }
    eatFood(){
    console.log("Nibble Nibble")
    }
    getPrice(){
    console.log(this.price)
    }
}
let myHamster = new Hamster("Mark", "MiniMe",15)
myHamster.wheelRun()
myHamster.eatFood()
myHamster.getPrice()
console.log(Hamster)
