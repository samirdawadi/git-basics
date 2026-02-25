//! operators
//* arithmetic op. => + , - , / , * , % , **

console.log(45 + 78)
// let a = 10
// let b = 49
console.log(a + b)
let sum = a + b

console.log(sum)

console.log(11 / 2) // 5.5
console.log(11 % 2) // 1

console.log(2 ** 4)


//* Assignment  =>   =  , += , -= , ....
// let d = 56;
let e = 45

// d = d + 10
d += 10 // d = d + 10

// d = d + e
d += e
console.log(d)


//* comparision op
// == , === , < , > <= >= , != , !== 

// == (Loose equal: value matrai compare, type herdaena)
console.log(5 == "5");   // true

// === (Strict equal: value + type dubai compare)
console.log(5 === "5");  // false

// < (Less than: sano cha ki nai)
console.log(3 < 5);      // true

// > (Greater than: thulo cha ki nai)
console.log(10 > 7);     // true

// <= (Less or equal: sano ya barabar)
console.log(5 <= 5);     // true

// >= (Greater or equal: thulo ya barabar)
console.log(8 >= 10);    // false

// != (Not equal: value different cha ki nai)
console.log(5 != "5");   // false

// !== (Strict not equal: value ya type different)
console.log(5 !== "5");  // true


//? output => boolean 

let f = 10
let g = '10'

// console.log(f == g) //  true
// console.log(f === g) // fasle

// console.log(12 >= 12)


//* logical op
// and ( && ), or ( ||  ) , not (!)

// console.log( true && true)  // true
// console.log( false && true)  // false
// console.log( true && false)  // false
// console.log( false && false)  // false

// console.log(true || true) // true
// console.log(false || true) // true
// console.log(true || false)  // true
// console.log(false || false) // false


//! ternary operator  [ condition ? statement_a : statement_b ]
let age = 17
let canVote = age >= 18 ? "Yes" : 'No'

// console.log(canVote)

//unary
// post/pre
let num = 0
// post inc /dec
// console.log(num++)

//pre 
// console.log(++num)
// console.log(num)

let a = 5;

// -------- Pre-Increment (++a) --------
// Pahila value badhcha, ani use huncha
console.log(++a);   // 6
console.log(a);     // 6


let b = 5;

// -------- Post-Increment (b++) --------
// Pahila use huncha, ani value badhcha
console.log(b++);   // 5
console.log(b);     // 6


let c = 5;

// -------- Pre-Decrement (--c) --------
// Pahila value ghatcha, ani use huncha
console.log(--c);   // 4
console.log(c);     // 4


let d = 5;

// -------- Post-Decrement (d--) --------
// Pahila use huncha, ani value ghatcha
console.log(d--);   // 5
console.log(d);     // 4

//! type conversion
// implicit / type coercing

// console.log( 10 + '10') //1010
// console.log(10 - '5') //5
// console.log(10 - 'a') // NaN(not a number)


//? explicit => 
    console.log(Number('456'))
    console.log(String(745))

    console.log(Boolean(45))
    console.log(Boolean(0))


    // console.log(Boolean("4hbhsadfj5")) //true
    // console.log(Boolean(""))  //false
    // console.log(Boolean(0))   //false

    let number = "23"
    

    // console.log(number.toString())
    // console.log(parseInt(number))



//! truthy & falsy values

// falsy value are given below and except this are truthly values
//* 0 , '', false , null , undefiend
console.log(Boolean(''))
console.log(Boolean(undefined))   
console.log(Boolean(null))
console.log(Boolean(-0))
console.log(Boolean(1))  //true other above all false


if(age !== 0){
    console.log('run')
}

if(age){
    console.log('run')
}

// let res = null

// if(res === null || res === undefined){
//     // errr
// }

// if(!res){   response ko value false vayo vanni return garca vitrako code
//     // errr
// }

// if(''){
//     console.log(true)
// }


//! typeof
console.log(typeof ' ')       //string
console.log(typeof 1)          //number
console.log(typeof true)       //boolean
console.log(typeof undefined)  //undefined
console.log(typeof null)  //object