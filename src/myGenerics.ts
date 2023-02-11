const scroe: Array<number> = [1, 2, 3]
const names: Array<string> = ["anshul", "shantanu", "akash"]

function identityOne(val : number | boolean): number | boolean {
    return val
    //? input <number> can returns <boolean> 

}

// function identityTwo(val : any): any {
//     return val //! Bad Practice
    //? input <number> returns <string> 
    // ? input <any> can return <any>

// }

function identityThree<Type>(val : Type) : Type {
    return val
    //? input <number> returns <number> 
}


interface Drink {
    brand : string,
    price : number
}

function identityFour<Drink>(val : Drink) : Drink {
    return val
}

const juice : Drink = {
    brand : "Sprite",
    price : 50
}

identityFour(juice)


//? Generic Arrow Method 

const getMoreSearchProducts = <T,>(products : T[]): T => {
    const index = 4
    return products[index]
}

