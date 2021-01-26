// Import stylesheets
import "./style.css";

//primitive, nonn primitive
//functions objects
//constructor
//inheritennce
//example, person(name, age, email, calculateage), athelete is a type of person with its own properties
//javascript is a prototype based languaga

//Every javascript object has a prototyoe property, which makes inheritence possible
//The prototype property of th eobject is a place where we put functions/properties that we wannt other objects to inherit
// the constructors prototype property is not the constructors prototype but , it is property of all objects that is created through it

//create object using function connstructor

var kaushal = {
  nname: "kaushal",
  year: 1987,
  job: "se"
};

// functionn constructor method
let Person = function(name, year, job) {
  this.name = name;
  this.year = year;
  this.job = job;
  // this.calculateage = function() {
  //   console.log(2020 - this.year);
  // };
};

Person.prototype.calculateage = function() {
  console.log(2020 - this.year);
};
Person.prototype.city = "Mumbai";

let kaushal2 = new Person("Kaushal", 1987, "SSE");
let vini = new Person("vini", 1994, "physics");
let jane = new Person("janne", 1988, "SM");

kaushal2.calculateage();
vini.calculateage();
jane.calculateage();

console.log(kaushal2.city);
console.log(vini.city);
console.log(jane.city);

//difference between __proto__ and Prototype
console.log(kaushal2.__proto__ === Person.prototype);
console.log(kaushal2 instanceof Person);

//object.Create

let personProto = {
  calculateAge: function() {
    console.log(2020 - this.year);
  }
};

let kaushal3 = Object.create(personProto, {
  name: { value: "kaushal3" },
  year: { value: "1987" },
  job: { value: "sse" }
});

//dooubt
// let kk3 = Object.create(personProto, {vini})
// kk3.calculateAge()

kaushal3.calculateAge();

///class based approach in ES6
// classes makess it easy to inherit
class Person2 {
  constructor(name, year, job) {
    this.name = name;
    this.year = year;
    this.job = job;
  }

  calculateAgePlus2() {
    console.log(2020 - this.year + 2);
  }
}

let kaushal4 = new Person2("Kaushal4", 1987, "ssse");
kaushal4.calculateAgePlus2();

class Person3 extends Person2 {
  constructor(name, year, age, month) {
    super(name, year, age);
    this.month = month;
  }

  givememonth() {
    console.log(this.month);
  }
}

let kaushal5 = new Person3("kaushal5", 1987, "sse", "january");
kaushal5.givememonth();
kaushal5.calculateAgePlus2();
console.log(kaushal5);
