//! array-----Array bhaneko ek type ko data hoina, tara ek sangai multiple values store garna sakine variable ho।


// new keyword
// array literal  
// []

let n1 = 1
let n2 = 2

// let arr = new Array()

// let numbers = [1,2,3,4,5,3,6]      //obj literal jasto array literal ho . nre Array garera garda time badi lagca so yei tarika use garni array declare garda
// 0th index

// reading element
// bracket notation
const first_ele = numbers[0]

console.log(first_ele)
console.log(numbers[5])

//! adding new element

//* from end index
// numbers.push(12,4,5,6)

//* from start index
// numbers.unshift(7,3,9)


//! removing element
//* from end index
//pop
// const popped_el =  numbers.pop()
// console.log(popped_el)
// console.log(numbers)


//* from start index
// shift
// const first = numbers.shift()
// console.log(first)


//!shift le suruko value delete garxa ani unshift le array ko suruma value add  garxa
//!ani splice le bicha tira ko value add/delete garna help garxa



// let array = [3, 4, 5, 6, 7, 8, "tdjytd"];

// // index 2 bata 3 elements delete garne
// array.splice(2, 3); // 5,6,7 delete huncha

// console.log(array);



let array = [3, 4, 5, 6, 7, 8];

// index 2 ma 2 delete, 100 add
array.splice(2, 2, 100);

console.log(array);   //[3, 4, 100, 7, 8]




// let array = [3, 4, 5, 6, 7, 8];

// console.log("Before:", array);

// // index 3 ma add 100 ra 200, delete = 0
// array.splice(3, 0, 100, 200);

// console.log("After:", array);  


//Before: [3, 4, 5, 6, 7, 8]
// After:  [3, 4, 5, 100, 200, 6, 7, 8]







// includes
// return boolean
console.log(numbers.includes(1))

// indexOf
console.log(numbers.indexOf(3))
console.log(numbers.indexOf(30))

console.log(numbers.lastIndexOf(3))
// console.log(numbers.)

numbers.push(12,34)


// length

console.log(numbers[numbers.length - 1])

console.log(numbers[-1]) //last element

console.log(numbers);
console.log(numbers.length)

console.log(numbers.at(0)) // numbers[0]
console.log(numbers.at(-2)) // numbers[length-2]

//! slice
// console.log(numbers.slice(0,4))

//! splice(startIndex , deleteCount , item1,item2 ,.......itemn)
// 
// const new_arr = numbers.splice(1,3)
// const new_arr = numbers.splice(1,3,65,87,657)
// const new_arr = numbers.splice(1,0,65,87,657)
// console.log(new_arr)

console.log(numbers)




//!remaining part of previous part


let user = {
    name:'john',
    email:'john@gmail.com',
    age:27
}



//* for in 
// obj ma for in
// key ko access  dinxa

for( let x in user ){
    console.log(x,user[x])

}



// for( let x in numbers ){
//     console.log(x)

// }

// for( let x of user ){
//     console.log(x)

// }



//* for of
// iterables => string , array ma for of
// value

for(let value of numbers ){
 console.log(value)
}


for(let value of 'HELLO' ){
 console.log(value)
}



//!................................

// ====================== for…of loop ======================
// for…of → array, string, set, map ko **value** iterate garna use huncha

// Array example
let fruits = ["Apple", "Banana", "Mango"];
console.log("for...of with Array");
for (let fruit of fruits) {
    console.log(fruit); // Array ko value print huncha: Apple, Banana, Mango
}

// String example
let name = "Samir";
console.log("for...of with String");
for (let char of name) {
    console.log(char); // String ko each character print huncha: S a m i r
}

// ====================== for…in loop ======================
// for…in → object ko **key** ya array ko **index** iterate garna use huncha

// Object example
let student = {
    name: "Ram",
    age: 20,
    course: "CSIT"
};

console.log("for...in with Object");
for (let key in student) {
    console.log(key, ":", student[key]); 
    // key = name, age, course
    // value = student[key]
}

// Array example (index access)
let numbers = [10, 20, 30];
console.log("for...in with Array (index)");
for (let index in numbers) {
    console.log(index, ":", numbers[index]); 
    // index = 0,1,2
    // value = numbers[index]
}

// ====================== Quick Tip ======================
// for…of → values ko lagi
// for…in → keys / index ko lagi


//! array methods
