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

let mazda = new Car("Mazda", 6);
mazda.ccc();