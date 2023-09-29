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

let inf = new Car("Infinity", 2);
inf.ccc();

console.log("___")

class D {
    constructor(aaa,b){
        this.aaa = aaa,
        this.b = b
    }

    asd(){
        
        console.log(this.aaa, this.b)
    }
}

let asda = new D(2,5);
asda.asd();