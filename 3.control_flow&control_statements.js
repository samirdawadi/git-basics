//js top to bottom , left to right ani yo interpreted language ho i.e one line at a code execute garxa

// control flow

// control statements

// let x =10

// console.log(x)

// x =59
// const y = 10
// console.log(y)

// y = 23

// console.log(y)

// if
let age = 50;
// if(age >= 18){
// console.log('can vote')
// }
// if else
if (age >= 18) {
  console.log("can vote");
} else {
  console.log("can not vote");
}
// if else if else
if (age >= 50) {
  console.log("Zen X");
} else if (age >= 20) {
  console.log("Zen Z");
} else if (age >= 20) {
  console.log("Zen Z");
} else {
  console.log("Zen Beta");
}

// switch
// let day = 4;
// switch (day) {
//   case 1: {
//       console.log("Sunday");
//       break;
//   }
//   case 2: {
//     console.log("Monday");
//     break;
//   }
//   case 3: {
//     console.log("Tuesday");
//     break
//   }
//   default: {
//     console.log("Invalid day");
//   }
// }

let day = 2;


switch (day) {
  case 1:
  case 7: {
    console.log("Weekend");
    break;
  }
  case 2:
  case 3:
  case 4:
  case 5:
  case 6: {
    console.log("work day");
    break;
  }

  default: {
    console.log("Invalid day");
  }
}

//loops