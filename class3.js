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
//Another same thing;
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

