//! array methods
// higher order methods

const numbers = [23, 4, 5, 676, 56]; //
//

//* looping array
//? forEach
// arr.forEach(callback)

const callBack = (value, index, arr) => {   //value, index, arr  yei lekhna pardaina aru lekhna milxa tara yad garnaparca ki surukoma chai array ko number ani index ani purai array auxa last koma
  console.log(value, index, arr);
  return value;
};

// const result = numbers.forEach(callBack)

// console.log(result)

// numbers.forEach((value,index,arr)=>{
// console.log(value,index,arr)
// })

// numbers.forEach(function(value,index,arr){
// console.log(value,index,arr)
// })

//! transformation
//* map--array lai arko array ma convert garni or map garni ani naya array ma convert gardinxa purano lai  , tara purano ni tehi hunca naya array matra banauni ho+
//  arr.map(callback)
// X => Y , return new array

// const result =   numbers.map((value)=>{
//     return value * 2
//     // return 'x'
// })

// console.log(result)

//! filter
// arr.filter(callback)
// returns new array

// const filtered = numbers.filter((value,index,arr)=>{    //filter le value matra return garxa .11 no line jasto tintai return gardaina , yeauta yeauta garera nikalni wala ma yo paila filter option ho paxi ava findindex haru auxa jasle index matra return garca 

//   if(value % 2 == 0){
//     return value
//   }

// })
// const  even = numbers.filter((value,index,arr)=> value % 2 == 0)
// console.log(numbers)
// console.log(filtered)
// console.log(even)

//
const index = numbers.findIndex((value) => {          //find index le index matra return garxa
  if (value % 2 === 0) {
    return value;
  }
});

//!every / some
// return boolean

// const is_every_even = numbers.every((value)=> value % 2 === 0)
// const is_every_even = numbers.every((value)=> {
//     if(value % 2 === 0){
//         return true
//     }else{
//         return false
//     }
// })
// console.log(is_every_even)

// const is_some_even = numbers.some((value)=> value % 2 === 0)

// console.log(is_some_even)

// console.log(index)

//

// reduce
//  single value return garxa as a final result
//  array -> reduce -> single value
//  array.reduce(callback)

const number = [10, 20, 3, 4, 40]; //

// // new arr => ele
// const arr = number.filter((val)=>{
//     if(val >= 10){
//         return val
//     }
// })

const sum = number.reduce((acc, value, i) => {
  return (acc = acc + value);
}, 0);                              //  (sumko value kati rakhni suruma vanya jastai ho) yo 0 chai suru ko 10 ko previous value ta kei xaina so 0 rakhyo ava paxi 10+20 gardai garda afai replace hunxa

console.log(sum);

//
const students = [
  {
    name: "Ram",
    roll: 10,
    std: 10,
    marks: [56, 45, 67, 87, 56],
  },
  {
    name: "Shyam",
    roll: 11,
    std: 10,
    marks: [65, 30, 27, 57, 56],
  },
  {
    name: "John",
    roll: 12,
    std: 10,
    marks: [50, 30, 28, 57, 35],
    // avg_mark :
  },
];

// 60
// map
// reduce => avg calculate

const calculateAvg = (arr) => {
  const total_marks = arr.reduce((acc, mark) => {
    return (acc += mark);
  }, 0);
  const avg = total_marks / arr.length;

  return avg;
};

const new_arr = students.map((student) => {
  student["avg_mark"] = calculateAvg(student.marks);

  return student;
});

console.log(new_arr);

// filter passed students
const passed_students = new_arr.filter((stu) => stu.avg_mark >= 60);
// console.log(passed_students);
// map passed students => name array
const passed_stu_name = passed_students.map(
  (stu) => `${stu.name}-${stu.avg_mark}%`,
);
console.log(passed_stu_name);
// console.log(students[0]);
//