"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const name = "Anshul";
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
function fu(name) {
    return `Hello ${name}`;
}
function err(err) {
    throw new Error("Error occoured");
}
function res(err) {
    // No Return value
}
// functions with objects
// Object parameter         / default value        // Return type
function user({ name: string, isPrimeMember: boolean = false }) {
    return {}; // Object return
}
// user() //=> gives error
// user({name : "john"}) //=> 2nd param's default value is false
user({ name: "John", isPrimeMember: true }); //=> correct
// return specified object ==>
function user2() {
    return { name: "John", isPrimeMember: true };
}
function createUser(user) {
    return {
        _id: user._id,
        name: user.name,
        email: user.email,
        isActive: user.isActive,
    };
}
let myUser = {
    _id: "01ca",
    name: "john",
    email: "john@test.com",
    isActive: true,
};
createUser(myUser);
// Union Type ==>
// Syntax
let score = 30;
score = 44;
score = "44";
let histesh = { name: "anshul", id: 2 };
function getID(id) {
    if (typeof id === "string")
        id.toLowerCase;
}
// Arrays ==>
// Syntax:
const superHero = [];
const Anime = [];
const Users = [];
superHero.push("SpiderMan");
Users.push({
    _id: "01ca",
    name: "john",
    email: "john@test.com",
    isActive: true,
});
const Matrix = [
    [200, 255, 255],
    [200, 200, 255],
    [200, 200, 200],
];
console.log(Matrix);
const data = [1, 2, 3, 4];
const data2 = ["One", "two", "three", "four"];
const data3 = ["one", "two"]; // Either all strings or all numbers
const data4 = [1, "two", 3, "four"]; // This can have both types of values
let seatAllotment;
seatAllotment = "middle";
// TupleUser = [true, 123, "ak"] //=> Erro bcoz order is not correct
const user5 = ["ak", 123, true];
user5[0] = "sk";
// ENUM ==>
var STATUS;
(function (STATUS) {
    STATUS[STATUS["SUCCESS"] = 0] = "SUCCESS";
    STATUS[STATUS["IDLE"] = 1] = "IDLE";
    STATUS[STATUS["ERROR"] = 201] = "ERROR";
})(STATUS || (STATUS = {}));
const statusCode = STATUS.ERROR;
const ak = {
    _id: 1,
    name: "ak",
    email: "ak@test.com",
    getCoupon(name, coNum) {
        return `${name}${coNum}`;
    },
};
const akEmp = {
    _id: 1,
    name: "ak",
    email: "ak@test.com",
    getCoupon(name, coNum) {
        return `${name}${coNum}`;
    },
    salary: 80000,
    department: "development"
};
