//! event loop---async task handle garni js ko mechanism
// The reason for asyncronous behaviour of JS, even it is single threaded => event loop

// JS engine:
// * call stack
// : Call stack executes 1 task at a time. At 1st, the call stack task is done i.e. synchronous task is done 1st which follow LIFO and, after call stack task empty, it shifts to task queue to execute task.
// * task queue / callback queue
// : classified into microtask queue (higher priority), macrotask queue (lower priority)
// * event loop
// : It pop task from task queue and add to call stack. It loops between call stack and task queue.

// Out of JS engine :
// ? web apis => timers, fetch, location, storage
// ? libUv
// Some task which should wait, is came out from JS engine and sit out of JS engine such web apis.

//---
// synchronous code example:
const add = (a, b) => {
  console.log(a + b); //15
  const c = () => {
    console.log("c");
  };
  c();
};

add(12, 3);
add(12, 3);

//? Understanding call stack for above:
// c()  <- Top pointer
// add()

//---
// Asynchronous code example:
console.log("start");
setTimeout(() => {
  console.log("set time out");
}, 2000);
console.log("end");

//? Understanding call stack, task queue, and event loop for setTimeout():
// Since setTimeout() is a part of timers in web apis, it sit out of JS engine in web apis of timers.
// After it's set time is reached it is scheduled to task queue
// And event loop, pop out the task from task queue and add to call stack.
// And again call stack starts to execute task which are inside call stack.

//---
// Promises is a part of microtask queue
// then, catch is part of microtask queue
// setTimeout is part of macrotask queue
// fetch is a part of microtask queue

//---
// Advance term:
//! nodejs event loop phases
//* 1. timers => setTimeout, setInterval
//* 2. pending callbacks => tcp error, dns error callbacks
//* 3. idle/prepare phase => node internal
//* 4. poll phase => file system, incoming i/o, requests, response
//* 5. check phase => setImmediate
//* 6. close callbacks => closing callbacks

process.nextTick(() => {
  // process.nextTick() is only used to executed highest priority order task.
  console.log("next");
});
