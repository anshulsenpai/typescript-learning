const name: string = "Anshul";
// data defined variable
console.log(name);

const person = {
  name: "anshul",
  age: 20,
};

// person.name = 75 // Giving error bcoz 'name' in person is type 'string'
console.log(person.name);

// console.log(person.location) // Error => location doesn't exist in object 'person'

// functions

// Parameter type  //Return Type
function fu(name: string): string {
  return `Hello ${name}`;
}

function err(err: string): never {
  throw new Error("Error occoured");
}

function res(err: string): void {
  // No Return value
}

// functions with objects

// Object parameter         / default value        // Return type
function user({ name: string, isPrimeMember: boolean = false }): {} {
  return {}; // Object return
}

// user() //=> gives error
// user({name : "john"}) //=> 2nd param's default value is false
user({ name: "John", isPrimeMember: true }); //=> correct

// return specified object ==>

function user2(): { name: string; isPrimeMember: boolean } {
  return { name: "John", isPrimeMember: true };
}

// Type Aliaces ==>

type User3 = {
  //immutable
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardNum?: number; // Optional
};

function createUser(user: User3): User3 {
  return {
    _id: user._id,
    name: user.name,
    email: user.email,
    isActive: user.isActive,
  };
}

let myUser: User3 = {
  _id: "01ca",
  name: "john",
  email: "john@test.com",
  isActive: true,
};

createUser(myUser);

// Union Type ==>

// Syntax
let score: number | string = 30;

score = 44;
score = "44";

type User4 = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let histesh: User4 | Admin = { name: "anshul", id: 2 };

type Member = {
  _id: string | number;
  name: string;
};

function getID(id: number | string) {
  if (typeof id === "string") id.toLowerCase;
}

// Arrays ==>

// Syntax:
const superHero: string[] = [];
const Anime: Array<string> = [];

const Users: User3[] = [];

superHero.push("SpiderMan");

Users.push({
  _id: "01ca",
  name: "john",
  email: "john@test.com",
  isActive: true,
});

const Matrix: number[][] = [
  [200, 255, 255],
  [200, 200, 255],
  [200, 200, 200],
];

console.log(Matrix);

const data: number[] = [1, 2, 3, 4];
const data2: string[] = ["One", "two", "three", "four"];

const data3: string[] | number[] = ["one", "two"]; // Either all strings or all numbers
const data4: (string | number)[] = [1, "two", 3, "four"]; // This can have both types of values

let seatAllotment: "aisle" | "middle" | "window";
seatAllotment = "middle";

// Tuples ==>

// Syntax
type TupleUser = [string, number, boolean];
// TupleUser = [true, 123, "ak"] //=> Erro bcoz order is not correct
const user5: TupleUser = ["ak", 123, true];
user5[0] = "sk";

export {};

// ENUM ==>

enum STATUS {
  SUCCESS,
  IDLE,
  ERROR = 201,
}

const statusCode = STATUS.ERROR;

// Interfaces ==>

interface Person {
  readonly _id: number;
  name: string;
  email: string;
  getCoupon(coupanname: string, value: number): string;
}

const ak: Person = {
  _id: 1,
  name: "ak",
  email: "ak@test.com",
  getCoupon(name: "coupanname", coNum: 2023) {
    return `${name}${coNum}`
  },
}

// ak._id = 2 //=> Error, '_id' is readonly

// Extended Interfaces

interface Employee extends Person {
  salary: number,
  department : "management" | "development" | "marketing" 
}

const akEmp: Employee = {
  _id: 1,
  name: "ak",
  email: "ak@test.com",
  getCoupon(name: "coupanname", coNum: 2023) {
    return `${name}${coNum}`
  },
  salary: 80000,
  department : "development"
}
