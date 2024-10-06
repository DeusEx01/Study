// const FIRST_TODO_URL = 'https://jsonplaceholder.typicode.com/todos/1';
// const getTodo = (callback) => {
//   fetch(FIRST_TODO_URL)
//     .then(response => response.json())
//     .then(todo => callback(todo))
//     .catch(error => console.log(error))
// }
// getTodo((todoItem) => {
//    console.log('todo', todoItem);
//    getTodo( (todoItem) => {
//     console.log(todoItem)

//    })
// })

//Microtasks

//  console.log('Start');

//  setTimeout(() => {
//   console.log('SetTimeout 2 second');
//  }, 2000);

//  const promise = new Promise(resolve => {
//     console.log('Inside promise');

//     resolve('Return from promise')
//  })

//  setTimeout(() => {
//   console.log('SetTimeout 1 seconds')
//  }, 1000);

//  promise.then(result => {
//   console.log(result)
//  })

//  console.log('End')

// Task 1
// setTimeout(() => {
//   console.log("setTimeout");
// }, 0);

// const promise = new Promise((resolve) => {
//   console.log("Promise");
//   resolve();
// });

// promise.then(() => {
//   console.log("Promise resolve");
// });

// console.log("End");

//Makrotask
// 1. Promise 2. End

//Microtask
//Promise resolve

//Callstack queue
// setTimeout

/*
1. Promise
2. End
3. Promise resolve
4. setTimeout
*/

// Task 2

function runCode() {
  console.log("before promise");
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Zero Promise");
      resolve();
    }, 0);
  });
}

setTimeout(() => {
  console.log("Zero");
}, 0);

runCode().then(() => console.log("Zero Promise Invoked"));

console.log("One");//

//Makrotask
// One / before promise

//Microtask
//Zero Promise Invoked

//Callstack queue
// Zero / console.log("Zero Promise");

/**
 * 1. One
 * 2. before promise
 * 3. Zero Promise Invoked
 * 4. Zero
 * 5. Zero Promise
 */