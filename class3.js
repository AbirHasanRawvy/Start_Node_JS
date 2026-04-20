///OOP
///1)Encapsulation, 2)Inheritence, 3)Polymorphijom and 4)Abstraction.

//1)Encapsulation: under the capsole have some data and manupulate the data its a encapsulation;
//2)Inheritence:
//3)Polymorphijom: Poly = multiple, morphi= behaviour, 
//4)Abstraction: Basic important thik will be hide;

///Object Literal;

const user = {
    name: "Abir",
    isAdmin: false,
    greet() {
        console.log(`Hi I am ${this.name}`);
    }, //method;
};

user.greet();
console.log(user.isAdmin);

console.log("===========================================");

//How to write class: class Class_name{constructor(name){this.name = name;}}
class Person {
    constructor(name) {
        this.name = name;
    }
}

//P is an instance of Person;
const p = new Person("Abir");

console.log(p instanceof Person);
console.log(p);

console.log("===========================================");
//Another same thing but here method and data both writedown so its also encapsulation;
class Car {
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }

    info() {//here info is method;
        return `${this.brand} ${this.model}`;
    }
}

const c1 = new Car("Honda", "Civic");

console.log(c1.info());

console.log("===========================================");

//Private and public;

class BankAccount {
    #balance = 0;//with using hash its showing private;
    constructor(owner){
        this.owner = owner;
    }
    //seter function;
    deposit(amount) {
        this.#balance += amount;
    }
    //geter function;
    get balance() {
        return this.#balance;
    }
}

const abirAcc = new BankAccount("Abir");
abirAcc.deposit(500);

// console.log(abirAcc.#balance);

console.log("===========================================");

///Constructor and Destructor;
//Destructor: Outside work is done and autometically data will be deleted;

class Rectangle {
    constructor(width, height){
        if (width <= 0 || height <= 0) throw new Error("Invalid Size");
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width = this.height;
    }
}

const r1 = new Rectangle(4, 5);
console.log(r1.area());
console.log("===========================================");
//Solid principle;