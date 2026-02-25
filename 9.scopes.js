//! scopes
// defines where the variables are visible / accessible

//! global scope
//* let const var
let global_let = "global let";
const global_const = "global const";
var global_var = "global var";        

//! block scope
// {}
// console.log("global", global_const);
// console.log("global", global_let);
// console.log("global", global_var);

if (true) {
  let block_let = "block let";
  const block_const = "block const";
  var block_var = "block var";                 //yo var chai ava hamle block baira pani access garna payou tara let ra const chai paudainau
  //   global_let = "123";
  //   console.log("block", global_const);
  //   console.log("block", global_let);
  //   console.log("block", global_var);
  console.log("block", block_const);
  console.log("block", block_let);
  console.log("block", block_var);
}

console.log(block_var);

// function scope
function scope() {
  //   console.log(block_var);
  let function_let = "function let";
  const function_const = "function const";
  var function_var = "function var";
  console.log("function", function_const);
  console.log("function", function_let);
  console.log("function", function_var);
  //   console.log("function", global_const);
  //   console.log("function", global_let);
  //   console.log("function", global_var);
}
scope();
// console.log(function_var);

// lexical scope

// function one() {
//   let x = 10;

//   function two() {
//     console.log(x);
//   }
//   two();
// }
// one();

//* scope chaining    ---buttom up(parent func/ any thing le child func/anything ko value access garna paudaina)

// let x = 100;
// function one() {
//   let x = 10;

//   function two() {
    // let x = 20;                            //xutai func ma same variable for let chai use garna pauxa
//     console.log(x);
//   }
//   two();
// }
// one();

function one() {
  let x = 200;
  if (true) {
    if (true) {
      console.log(x); // 200
      x = 400;
    }
    console.log(x); // not defined
  }

  console.log(x); // not defined , 400
}

one();