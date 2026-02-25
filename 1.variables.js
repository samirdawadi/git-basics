// js chai synchronous , interpreted, dynamic typed language

console.log('hello world');

console.log(2 + 2);

//variables
// let var const
var a = 30
// var a = 30

a = 'str'           //yo a chai dynamic type ho kinavani paila yesma int value theo aile string xa so jun pani assign garna payo tesaile
console.log(a)

// var a = ''




// let b ='hello'
// let b;

// let b
b = 87
console.log(b)

b ='jhd'
console.log(b)


// var (Old JS, function scope, risky)
var a = 10;
var a = 20;        // Same variable feri declare garna milcha (unsafe)
console.log(a);   // 20


// let (Modern JS, block scope, safe)
// let b = 30;
// let b = 40;     // ❌ Error: feri declare garna mildaina

b = 40;            // Value change garna milcha
console.log(b);   // 40




//!const ma variable matra declare garna mildaina value initialize pani garna parca.tara let ra var ma variable declare matra garna pauxa

const c =56   
// c = 67           const ko value/data lai chai change garna mildaina let ra var jasto 
console.log(c)

const d =56
let e;

// let x;
e =56

// const c = ''

// var b = ''

//! data types--primitive n non primitive

//! primitive  ---- basic types ho
// string , number , boolean , undefiend , null

//? string
let str = 'hello';
let f = "world"

//! template literal
console.log(f)
let g = `hello ${2 + 2}`   //yo pani string declaration ho mathi ko str ra f ma vako jasto tara yesko faida k xa vani yesma multiline string pani support garxa jastai string lekhda lekhda paragraph change pani garna pauxa tara "" ra '' vita chai paudaina.
// console.log(g)

//? number
let h = 12
let i = 12.45

//? boolean
let j = true
let k = false

//? undefined
// let l = undefined;
let l;                     //jun variable ma value assign gareko hudaina testolai js le internally use garni undefined datatype ho
console.log(l)              //undefined auxa

//? null
let m = null                //variable declare pani garim ani intentionally value empty(null) garyaxam 

console.log(m)


//! operators



//! non primitive  ----basic type lai use garera define gareko complex data type ho tesma talako parxa:


//* object 
//* array
//* function


// ========== PRIMITIVE DATA TYPE ==========

// Number type
let a = 10;

// a ko value b ma copy bhayo (naya copy banxa)
let b = a;

// b ko value change garyo
b = 20;

// a change bhayena kina ki primitive ma copy hunxa
console.log("a =", a); // 10
console.log("b =", b); // 20


// ========== NON-PRIMITIVE DATA TYPE ==========

// Array type (Non-Primitive)
let arr1 = [1, 2, 3];

// arr1 ko address arr2 ma copy bhayo (same memory)
let arr2 = arr1;

// arr2 bata value change garyo
arr2[0] = 100;

// arr1 pani change bhayo kina ki duita same memory use garxa
console.log("arr1 =", arr1); // [100,2,3]
console.log("arr2 =", arr2); // [100,2,3]






// vaiables
// let const var
let x;
x = 74
// let x = 56

var y ;
 y = 57

 var y = 465

 const z = 56;
//  z = 8
// const z = 56

//! data types;
// number 
// string
// boolean
// null  => empty
// let a = null
// undefined  => 
    // let variable;

//! operators

// l