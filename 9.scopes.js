//! scopes
// defines where the variables are visible / accessible

//! global scope
//Global scope मा declare गरिएको variable program को जहाँबाट पनि access गर्न सकिन्छ।
//* let const var
let global_let = "global let";
const global_const = "global const";
var global_var = "global var";

//! block scope
//Block scope { } भित्र declare गरिएको variable त्यही block भित्र मात्रै access हुन्छ।
//यो let र const मा लागू हुन्छ।

// {}
// console.log("global", global_const);
// console.log("global", global_let);
// console.log("global", global_var);

if (true) {
  let block_let = "block let";
  const block_const = "block const";
  var block_var = "block var"; //yo var matra chai ava hamle block baira pani access garna payou tara let ra const chai paudainau only inside {}
  //   global_let = "123";
  //   console.log("block", global_const);
  //   console.log("block", global_let);
  //   console.log("block", global_var);
  console.log("block", block_const);
  console.log("block", block_let);
  console.log("block", block_var);
}

console.log(block_var);
//  console.log("block", block_const);     chaldaina kinaki yo const ra let {} (block) vitra matra access garna pauxa
// console.log("block", block_let);

//! function scope
//Function भित्र declare भएको variable त्यो function भित्र मात्रै access गर्न मिल्छ।

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

//! lexical scope
//Lexical scope भन्नाले inner function ले outer function को variable access गर्न पाउने system हो।

// function one() {
//   let x = 10;

//   function two() {
//     console.log(x);
//   }
//   two();
// }
// one();

//* scope chaining    ---buttom up(parent func/ any thing le child func/anything ko value access garna paudaina)

/**
 जब program मा variable use गरिन्छ भने JS engine ले यसरी खोज्छ:

1️⃣ पहिले current scope (local scope) मा खोज्छ
2️⃣ त्यहाँ भेटिएन भने outer scope मा खोज्छ
3️⃣ अझै भेटिएन भने global scope मा खोज्छ
4️⃣ कतै भेटिएन भने ReferenceError आउँछ

यो scope हरूलाई chain जस्तो गरी search गर्ने process लाई Scope Chaining भनिन्छ।

 */

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
