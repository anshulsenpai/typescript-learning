// Classes in TS :

// Ex : 1

// class User {
//     email : string
//     name : string
//     // readonly 
//     city : string = ""
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//     }
// }

// let anshul = new User("anshul@test.com", "anshul")

// // // anshul.city = 2 //=> It's a string
// anshul.city = "Gondia"


// Ex : 2

// class User {
//     email : string
//     private name : string
//     private readonly city : string = ""
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//         this.city = "Gondia"
//     }
// }

// let ak = new User("ak@ak.com", "anshul")


// Ex : 3

// //? Easy Syntax 
// class User {
//     constructor(
//         public name : string,
//         private email : string,
//         readonly city : string
//     ) {
        
//     }
// }

// //? Getters & Setters And Private Methods

// class User {

//     public _courseCount = 1

//     constructor(
//         public name : string,
//         private email : string,
//         readonly city : string
//     ) {
        
//     }
//     // private methods don't have any return type 
//     private deleteToken() {
//         console.log("Token Deleted")
//     }

//     get getEmail(): string {
//         return `xyz${this.email}`
//     }

//     get courseCount(): number {
//         return this._courseCount
//     }

//     // setters don't have any return type 
//     set courseCount(courseNum) {
//         if (courseNum <= 1) {
//             throw new Error("Course count should be more than 1")
//         }
//         this._courseCount = courseNum
//     }

// } 

//? Note : 'public, private, static' are the access modifiers 


// Inheritence 

// class SuperUser extends User {
//     //? constructor of User class is accessed
//     //?  Private properties not inherited

//     isAdmin : boolean = true 

//     changeCourseCount() {
//         this._courseCount = 4
//     }
// }


//? Interfaces in Classes 

// interface TakePhoto {
//     cameraMode : string,
//     filter: string,
//     burst : number,
// }

// interface Story {
//     createStory() : void
// }

// class Instagram implements TakePhoto {
//     constructor(
//         public cameraMode : string,
//         public filter : string,
//         public burst : number,
//         public short : string
//     ) {

//     }
// }

// class Snapchat implements TakePhoto, Story {
//     constructor(
//         public cameraMode : string,
//         public filter: string,
//         public burst : number,
//     ) {

//     }

//     createStory(): void {
//         console.log("Story created")
//     }
// }

// //* Abstract Classes

abstract class TakePhoto {

    constructor(
        public cameraMode : string,
        public filter : string
    ) {
//? Abstract classes are blueprints, we can't create an object by these class,
//? only classes which are extentending Abstract classes can create an objects
    }

    abstract getSepia() : void

}

class Instagram extends TakePhoto {
    constructor(
        public cameraMode : string,
        public filter : string,
        public brust : number
    ) {
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("Sepia")
    }
}

const ak = new Instagram("test", "test", 10)