//! closure

//parent func execute vaysei pani child func le parent ko scope access garna pauxa . tehi ho closure
//Closure is a function that has access to variables from its outer function scope even after the outer function has returned.
/*
function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3
🔎 K bhayo yahaa?

outer() run bhayo.

count = 0 banayo.

inner function return bhayo.

Normally outer finish bhaye pachi count delete hunu parcha.

But ❗ inner le count lai yaad rakheko cha.

👉 That is Closure.

*/





// a = 120 , b=30

// const add = (a, b) => {
//   return a + b;
// };

// add(12, 3); // 15
// add(120, 30);
// add(12, 3);
// add(12, 3);

// lexical

const parent = () => {
  let x = 0;
  //   let x = "parent var";
  const child = () => {
    x = x + 1;
    console.log(x);
  };

  //   child()
  return child;
};

// const child = parent();

// child();

//
// const createCounter = () => {
//   let count = 0;

//   const increment = () => {
//     console.log(count);
//     count++;
//   };

//   //   reset

//   return increment;
// };

// closure
// const counter = createCounter(); //{count =4}
// const counter1 = createCounter(); // {count:3}
// counter(); // 0
// counter(); // 1
// counter1(); // 0
// counter1(); // 1
// counter(); //2
// counter(); //3
// counter1(); // 2

// initial count arg , inc , reset  = 0

const createCounter = (initialCount = 0) => {
  let count = initialCount;

  //   const increment = () => {
  //     count++;
  //     console.log(count);
  //   };
  //   const reset = () => {
  //     count = initialCount;
  //     console.log(count);
  //   };

  //   return {
  //     increment,
  //     reset,
  //   };

  return {
    increment: () => {
      count++;
      console.log(count);
    },
    reset: () => {
      count = initialCount;
      console.log(count);
    },
  };
};

// const counter = createCounter();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.reset();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();

//TODO: createAccount(name , initial_amt) return => withdraw , deposit , inquiry , getDetails