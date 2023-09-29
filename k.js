class Car {
    constructor(marca, age){
        this.marca = marca,
        this.age = age
    }

    ccc(){
        console.log(`Машина марки ${this.marca}, ей ${this.age} лет.`)
    }
}
console.log("___")

let ford = new Car("Ford", 10);
ford.ccc()

console.log("___")

let doodge = new Car("Doodge", 6);
doodge.ccc();

console.log("___")

let toyota = new Car("Toyota", 18);
toyota.ccc();

console.log("___")

let nissan = new Car("Nissan", 11);
nissan.ccc();

console.log("___")

let infinity = new Car("Infinity", 2);
infinity.ccc();

console.log("___")
console.log("___")
console.log("___")