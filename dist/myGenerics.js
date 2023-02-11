"use strict";
const scroe = [1, 2, 3];
const names = ["anshul", "shantanu", "akash"];
function identityOne(val) {
    return val;
    //? input <number> can returns <boolean> 
}
// function identityTwo(val : any): any {
//     return val //! Bad Practice
//? input <number> returns <string> 
// ? input <any> can return <any>
// }
function identityThree(val) {
    return val;
    //? input <number> returns <number> 
}
function identityFour(val) {
    return val;
}
const juice = {
    brand: "Sprite",
    price: 50
};
identityFour(juice);
