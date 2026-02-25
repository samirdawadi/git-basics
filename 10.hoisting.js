//! Hoisting--   (behaviour)   Hoisting भन्नाले JavaScript ले variable र function declaration लाई code run हुनुअघि नै memory ma mathi sarni process हो।
//variable ko declaration ko part lai scope ko top part ma move garxa

//Hoisting is JavaScript's default behavior of moving declarations to the top of their scope before execution.

// GEC


// memory creation phase [EC creation]  &  execution phase

// phase 1
// x: undefined
// hoist:() { console.log("hoisted function"); }
// phase II
// x: 20


/*
var Example
console.log(a);  yesma undefined auxa yedi let ra const xa vani chai tesma error auxa
var a = 10;


👉 Output:
undefined
💡 किन?

JS internally यस्तो बनाउँछ:

var a;        // hoisted
console.log(a);
a = 10;

✔️ var hoist हुन्छ
❌ value hoist हुँदैन (initially undefined हुन्छ)

*/



console.log(x); // undefined

var x = 20;

console.log(x); // 20

hoist(); //  chalxa hoist func kinaki js ma func declare garnu vanda pailai call garna pauxa with the help of hoisting
console.log(hoist);

function hoist() {
  console.log("hoisted function");
}

//

// add(12, 3);
// add(120, 30);
// add(12, 3);
// add(12, 3);
// add(12, 3);
// phase I phase 2

function add(a, b) {
  console.log(a + b);
  two();
}

// GEC

// console.log(y);
const y = 30;

// TDZ

// function expression

console.log(func1);

// console.log(func1());    //yo func1() chaldaina kinaki top scope mata js le variable rakhxa i.e func1 so console.log(func1) lekhda chai error audaina undefined auxa kinaki yo vaneko variable ko nam matra ho jun hoist vako hunxa

var func1 = function () {
  console.log("var function");
};
console.log(func1);

func1();

let x = 30;
let x = 345;

// typescript
// git/github