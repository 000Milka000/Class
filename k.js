class Car {
    constructor(marca, age){
        this.marca = marca,
        this.age = age
    }

    ccc(){
        console.log(`Машина марки ${this.marca}, ей ${this.age} лет.`)
    }
}

let ford = new Car("Ford", 10);
ford.ccc()

console.log("___")

let mazda = new Car("Mazda", 6);
mazda.ccc();

let toyota = new Car("Toyota", 18);
toyota.ccc();

let nissan = new Car("Nissan", 11);
nissan.ccc();

