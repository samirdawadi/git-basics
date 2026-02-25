//! object  --data structure ho , jun chai real world ko complex obj lai program ma rep garna paryo vani use garni data structure ho




//new keyword
// const obj = new Object()

// object literal

//👉 Object Literal bhaneko direct { } use garera object banaune tarika ho।

//👉 Matlab: Class / function bina nai object create garne method ✅

// let user_name = ''
// let user_email = ''

const user ={        //variable ma {} yo halna sath yeslai object literal vanxa   . user object ho ava.
    name:'Ram',
    email:'ram@gmail.com',
    age:28,
    
} 






// Object Literal banaune example

let student = {             ///student chai object ho

    // property (key : value)
    name: "Samir",
    age: 20,
    course: "CSIT",

    // method (function inside object)
    greet: function(){
        console.log("Hello, my name is " + this.name);
    }
};

// Object ko data use garne
console.log(student.name);   // Samir
console.log(student.age);    // 20

// Object ko function call garne
student.greet(); // Hello, my name is Samir








// accessing object properties
//* dot notation (.)
console.log(user.email)  //
let user_email = user.email
console.log(user_email)  //
// console.log(user.user age)

//* bracket notation ([])
console.log(user['name'])
// console.log(user['user age'])

let key = 'name'
// console.log(user.key) //undefined
console.log(user[key])

//! modify object properties
user.age = 27

//! adding new properties
user.password = '12345'

delete user.age



console.log(user)

// {}
// if({}){     //object non primitive ho so khali {} check garda true hunca i.e opposite of primitive. ani run execute hu xa
//     console.log('run')
// }

// console.log({} === {})

const user1 ={
    name:'Ram',
    email:'ram@gmail.com',
    age:28,
    address:{                         //nested address i.e object vitra object
        city:'',
        street:123
    }
    
}

console.log(user1.address.street)
console.log(user1['address']['street'])


// if(user.address){
//     if(user.address.street){
//         console.log(user.address.street)
//     }
// }

//! optional chaining
console.log(user.address?.street)


