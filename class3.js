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
    // constructor(radius){
    //     this.radius = radius;
    // }
    constructor(width, height){
        if (width <= 0 || height <= 0) throw new Error("Invalid Size");
        this.width = width;
        this.height = height;
    }

    redArea() {
        return this.radius * radius;
    }
    area() {
        return this.width * this.height;
    }
}

const r1 = new Rectangle(4, 5);
// const r2 = new Rectangle(4);
console.log("The ractangle area is: "+r1.area()+".");
// console.log(r2.redArearea());
console.log("===========================================");
//Solid principle: Means single resonsibility like a function work for its main one work;


//Inheritance;
class Animal {
    constructor(name) {
        this.name = name;
    }
    sound() {
        console.log(`${this.name} makes a sound`);
    }
}

class Dog extends Animal {
    sound() {
        console.log(`${this.name} barks`);
    }
}

class Cat extends Animal {
    sound() {
        console.log(`${this.name} meow`);
    }
}

const d1 = new Dog("Tarzen");
d1.sound();

const cat = new Cat("Tarzen");
cat.sound();
console.log("===========================================");

//Another one;
class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }
}

class Bike extends Vehicle {
    constructor(brand, cc){
        super(brand);
        this.cc = cc;
    }
}

const b = new Bike("Yamaha", 150);
console.log(b);
console.log("===========================================");

//Overriding: Child class replaces parent method with a new implementation;
//Runtime Polymorohijom;
class Payment {
    pay(amount) {
        console.log(`Paying ${amount}`);
    }
}

class BkashPayment extends Payment {
    pay(amount) {
        console.log(`Paying ${amount} via Bkash.`);
    }
}

class CardPayment extends Payment {
    pay(amount) {
        console.log(`Paying ${amount} via Card.`);
    }
}

function checkout(payment, amount) {
    payment.pay(amount);
}

checkout(new BkashPayment(), 500);
checkout(new CardPayment(), 500);

console.log("===========================================");

//Polymorphijom;

class Shape {
    area() {
        throw new Error("Implement in subclass");
    }
}

class Circle extends Shape {
    constructor(r) {
        super();
        this.r = r;
    }

    area() {
        return Math.PI * this.r ** 2;
    }
}

class Rectangle1 extends Shape {
    constructor(w, h) {
        super();
        this.w = w;
        this.h = h;
    }

    area() {
        return this.w * this.h;
    }
}

const shapes = [new Circle(3), new Rectangle1(4,5)];

for (const s of shapes) {
    console.log(s.area());
   
}

console.log("===========================================");

//Abstraction: not possible to create a instance from parent class but create instance from child class;


// class StorageService {
//     //pseudo-absteact method;
//     save(key, value) {
//         throw new Error("Save must be implemented.");
//     }
// }

// class localStorageService extends StorageService {
//     save(key, value){
//         localStorage.setItem(key, JSON.stringify(value));
//     }
// }

// const svc = new StorageService();
// svc.save("user", { name: "Abir" });

console.log("===========================================");

//Map;

const map = new Map();

const objkey = { id: 1};

map.set("name", "Amazon");
map.set(Object, [1, 2, 3]);

console.log(map.get("name"));
console.log(map.get(Object));

map.delete("name");

console.log(map.has("name"));
map.clear();

console.log("===========================================");

//Set: Much more important;

const arr = [1, 2, 2, 4, 5, 6, 6, 1];
console.log([...new Set(arr)]);

console.log("===========================================");

